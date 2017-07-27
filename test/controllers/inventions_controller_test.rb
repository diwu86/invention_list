require 'test_helper'

class InventionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get inventions_index_url
    assert_response :success
  end

end
