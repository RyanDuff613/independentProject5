# Super Galactic Age Calculator

#### Epicodus Week Five | Intermediate JavaScript: Test Driven Development and Environments with JavaScript 

#### By Ryan DufF

## Description
This is a demonstration of skills learned in week 5 of the Epicodus Ruby/React curriculum. It uses Node Package Manager and Webpack to handle user and development dependencies. Jest is employed to run tests on the Javascript code. Babel is used to refactor the Javascript, which contains elements of ES6, into an earlier version of the language which is more readable by older browsers. The Javascript code creates an ES6 class that takes in data on a users age in Earth years and uses class methods to return that individuals age in solar years for Mercury, Venus, Mars and Jupiter. Another method takes in the users demographic information and returns a value for life expectancy. If that user has already exceeded their life expectancy, the method returns the number of years by which they have exceeded the expectancy.


## Setup/Installation Requirements

This site does not have a user interface but the Javascript is user accessible via the console in any web browser, Google Chrome is recommended: In Chrome: Open index.html > Menu Bar > ... > More Tools > Developer Tools.

## Specifications

| Behavior       | Input         | Output  |
| ------------- |:-------------:| -----:|
| User enters their demographic information and the code creates an instance of the the class User which stores this information. | Name:Andy, Age:37, Country of Residence: USA | {user name = andy, sex = male, earthYears = 37, country = USA}|
| Code returns users age in terms of solar years for the planets Mercury, Venus, Mars and Jupiter | earthYears:37 | mercuryYears:156.8, venusYears: 61.4, marsYears:20, jupiterYears:11.6|
| Code returns users life expectancy, given provided demographic information | age:37, sex:male, country:usa| lifeExpectancy: 78.8 years|
| Code returns number of years user is expected to live beyond today in Earth years and in terms of the solar years of Mercury, Venus, Mars and Jupiter| age:37, sex:male, country:USA | earthYearsExpected: 41.8, mercuryYearsExpected: 173.5, venusYearsExpected: 67.9, marsYearsExpected:22.2, jupiterYearsExpected:3.52|
| If user age is already greater than life expectancy, code returns the value, in years, by which expectancy has been exceeded| age:82, sex:male, country:USA| 

## Technologies Used

* _Markdown_
* _Git_
* _HTML_
* _CSS_
* _jQuery & Javascript_
* _NPM_
* _Webpack_
* _Jest_
* _Babel_

## Known Bugs

This site only supplies life expectancy data for individuals in the US.

### License

**The MIT license**

Copyright (c) 2020 **Ryan Duff**
