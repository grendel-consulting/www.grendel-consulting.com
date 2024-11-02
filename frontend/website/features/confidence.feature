Feature: Live website serving content

    Scenario: Ping website homepage
        Given I open url "https://www.grendel-consulting.com"
        When I click link "Home"
        Then I see in title "Building and fixing teams and processes"
