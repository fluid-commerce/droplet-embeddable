# frozen_string_literal: true

require "test_helper"

class EmbeddableControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @user = users(:admin)
    @company = companies(:acme)
  end

private

  def basic_auth_headers
    {
      "HTTP_AUTHORIZATION" => ActionController::HttpAuthentication::Basic.encode_credentials(
        ENV.fetch("EMBEDDABLE_AUTH_USERNAME", "admin"),
        ENV.fetch("EMBEDDABLE_AUTH_PASSWORD", "password"),
      ),
    }
  end

  test "should get new form" do
    get new_embeddable_path, headers: basic_auth_headers
    assert_response :success
    assert_select "form[action=?]", embeddables_path
    assert_select "input[name=?]", "embeddable[embeddable_id]"
    assert_select "input[name=?]", "embeddable[name]"
  end

  test "should create embeddable with valid params" do
    assert_difference("Embeddable.count") do
      post embeddables_path, params: {
        embeddable: {
          embeddable_id: "new-dashboard-123",
          name: "New Dashboard",
          description: "A new test dashboard",
          configuration: '{"theme": "light", "autoRefresh": true}',
          default: false,
        },
      }, headers: basic_auth_headers
    end

    assert_redirected_to embeddables_path
    assert_equal "Dashboard was successfully created.", flash[:notice]
  end

  test "should not create embeddable with invalid params" do
    assert_no_difference("Embeddable.count") do
      post embeddables_path, params: {
        embeddable: {
          embeddable_id: "",
          name: "",
          description: "Invalid dashboard",
        },
      }, headers: basic_auth_headers
    end

    assert_response :unprocessable_entity
  end

  test "should get show without authentication" do
    get embeddable_show_path("test-dashboard-id"), params: { dri: "acme-installation-uuid-123" }
    assert_response :success
    assert_select "em-beddable"
  end

  test "should get show when authenticated" do
    sign_in @user
    get embeddable_show_path("test-dashboard-id"), params: { dri: "acme-installation-uuid-123" }
    assert_response :success
    assert_select "em-beddable"
  end

  test "should return error when DRI parameter is missing" do
    get embeddable_show_path("test-dashboard-id")
    assert_response :bad_request
    assert_equal "DRI parameter is required", JSON.parse(response.body)["error"]
  end

  test "should return error when company is not found with DRI" do
    get embeddable_show_path("test-dashboard-id"), params: { dri: "non-existent-dri" }
    assert_response :not_found
    assert_equal "Company not found with DRI: non-existent-dri", JSON.parse(response.body)["error"]
  end
end
