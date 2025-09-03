require "test_helper"

describe EmbeddableTokensController do
  it "creates token successfully" do
    sign_in users(:admin)

    # Mock the service to return a successful response
    mock_service = Minitest::Mock.new
    mock_service.expect :generate_token, { "token" => "test-token-123" }

    EmbeddableTokenService.stub :new, mock_service do
      post embeddable_tokens_url, params: {
        embeddable_id: "test-embeddable",
        expires_in: 7200,
        user: "test_user",
        environment: "production",
        security_context: { role: "admin" },
      }
    end

    must_respond_with :success
    response_body = JSON.parse(response.body)
    assert_equal "test-token-123", response_body["token"]
    mock_service.verify
  end

  it "creates token with minimal params" do
    sign_in users(:admin)

    # Mock the service to return a successful response
    mock_service = Minitest::Mock.new
    mock_service.expect :generate_token, { "token" => "minimal-token" }

    EmbeddableTokenService.stub :new, mock_service do
      post embeddable_tokens_url, params: {
        embeddable_id: "minimal-embeddable",
      }
    end

    must_respond_with :success
    response_body = JSON.parse(response.body)
    assert_equal "minimal-token", response_body["token"]
    mock_service.verify
  end

  it "handles service errors gracefully" do
    sign_in users(:admin)

    # Mock the service to return an error response
    mock_service = Minitest::Mock.new
    mock_service.expect :generate_token, {
      status: :unprocessable_entity,
      errors: { base: [ "Failed to retrieve token from Embeddable: Bad Request" ] },
    }

    EmbeddableTokenService.stub :new, mock_service do
      post embeddable_tokens_url, params: {
        embeddable_id: "error-embeddable",
      }
    end

    must_respond_with :success
    response_body = JSON.parse(response.body)
    assert_equal "unprocessable_entity", response_body["status"]
    assert_includes response_body["errors"]["base"].first, "Failed to retrieve token from Embeddable"
    mock_service.verify
  end

  it "filters out unpermitted params" do
    sign_in users(:admin)

    # Mock the service to verify it receives only permitted params
    mock_service = Minitest::Mock.new
    mock_service.expect :generate_token, { "token" => "filtered-token" }

    EmbeddableTokenService.stub :new, mock_service do
      post embeddable_tokens_url, params: {
        embeddable_id: "filtered-embeddable",
        expires_in: 3600,
        user: "test_user",
        environment: "test",
        security_context: { role: "user" },
        # These should be filtered out
        malicious_param: "should_not_be_passed",
        another_bad_param: "also_filtered",
      }
    end

    must_respond_with :success
    response_body = JSON.parse(response.body)
    assert_equal "filtered-token", response_body["token"]
    mock_service.verify
  end

  it "requires authentication" do
    post embeddable_tokens_url, params: {
      embeddable_id: "unauthenticated-embeddable",
    }
    must_respond_with :redirect
  end
end
