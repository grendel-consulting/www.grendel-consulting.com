Feature: As a visitor I want to visit the website in order to see what the business offers

  @timeout:5000
  Scenario: Visit the Domain
    Given I have an open browser
    When I navigate to "https://www.grendel-consulting.com/"
    Then I see "Building and fixing teams and processes" in the title
    And I have no problems navigating the site
