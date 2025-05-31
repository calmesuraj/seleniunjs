Feature: Dynamic Test Launch

  @smoke
  Scenario: Launch with dynamic URL and browser
    Given I open the application
    When I enter "webdriver" into "Search Box"
    Then the page title should contain "webdriver"
