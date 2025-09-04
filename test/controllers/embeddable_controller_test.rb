# frozen_string_literal: true

require "test_helper"

class EmbeddableControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  setup do
    @user = users(:admin)
    @company = companies(:one)
  end

  test "should get show without authentication" do
    get embeddable_path("test-dashboard-id")
    assert_response :success
    assert_select "em-beddable"
  end

  test "should get show when authenticated" do
    sign_in @user
    get embeddable_path("test-dashboard-id")
    assert_response :success
    assert_select "em-beddable"
  end
end
