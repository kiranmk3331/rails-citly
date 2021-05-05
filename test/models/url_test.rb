require "test_helper"

class UrlTest < ActiveSupport::TestCase
  def setup
    Url.delete_all

    @url = Url.new(long_url: "https://google.com",
                   short_url: "http://localhost:3000/aeiou")
  end

  test "value of long url assigned" do
    assert_equal "https://google.com", @url.long_url
  end

  test "instance of url" do
    assert_instance_of Url, @url
  end

  test "error raised" do
    assert_raises ActiveRecord::RecordNotFound do
      Url.find(SecureRandom.uuid)
    end
  end

  test "url should not be valid without long url" do
    @url.long_url = ""
    assert_not @url.valid?, "Long url is empty"
  end

  test "url should not be valid without short link" do
    @url.short_url = ""
    assert_not @url.valid?, "Short url is empty"
  end

  test "long urls should be valid" do
    long_urls = %w[https://guides.rubyonrails.org/v3.2/testing.html#unit-testing-your-models
                   https://www.honeybadger.io/blog/ruby-solid-design-principles/]

    long_urls.each do |url|
      @url.long_url = url
      assert @url.valid?
    end
  end

  test "short urls should be valid" do
    short_urls = %w[http://localhost:3000/tlkdperp
                    http://localhost:3000/omw76j9q]

    short_urls.each do |url|
      @url.short_url = url
      assert @url.valid?
    end
  end

  test "short urls should not accept invalid url" do
    invalid_short_urls = %w[hello,com/3456t hello_example.com/4567g
                            htt://seth-man.com/ec34 hello&+noone.com/6789d]

    invalid_short_urls.each do |url|
      @url.short_url = url
      assert_not @url.valid?
    end
  end

  test "long urls should not accept invalid url" do
    invalid_long_urls = %w[htts:www.example.com/main.html /main.html
                           htt://321...com hello&&.com]

    invalid_long_urls.each do |url|
      @url.long_url = url
      assert_not @url.valid?
    end
  end
end
