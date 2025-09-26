# frozen_string_literal: true

require "test_helper"

class EmbeddableControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @user = users(:admin)
    @company = companies(:acme)
  end

  test "should get new form" do
    get new_embeddable_path
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
      }
    end

    assert_redirected_to embeddable_path("new-dashboard-123")
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
      }
    end

    assert_response :unprocessable_entity
  end

  test "should get show without authentication" do
    get embeddable_path("test-dashboard-id"), params: { dri: "acme-installation-uuid-123" }
    assert_response :success
    assert_select "em-beddable"
  end

  test "should get show when authenticated" do
    sign_in @user
    get embeddable_path("test-dashboard-id"), params: { dri: "acme-installation-uuid-123" }
    assert_response :success
    assert_select "em-beddable"
  end

  test "should return error when DRI parameter is missing" do
    get embeddable_path("test-dashboard-id")
    assert_response :bad_request
    assert_equal "DRI parameter is required", JSON.parse(response.body)["error"]
  end

  test "should return error when company is not found with DRI" do
    get embeddable_path("test-dashboard-id"), params: { dri: "non-existent-dri" }
    assert_response :not_found
    assert_equal "Company not found with DRI: non-existent-dri", JSON.parse(response.body)["error"]
  end
end
