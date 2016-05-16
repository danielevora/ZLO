ZILLOW HOME API

Design considerations and shortcomings

Libraries
- react.js: fast, modern, lightweight front-end component library to help organize without abstracting away and obscuring real implementation details
- webpack: module bundler to help package my react components
- jest: unit tester, offshoot of jasmine.js (unused)

Front End
- formatting left out for fields in the interest of time, e.g. currency
- validations mostly unchecked and left to the api in the interest of time
- few optimizations made for deployment

Back End
- validations mostly unchecked and left to the api in the interest of time
- excess boilerplate code leftover from VS templating
- mostly a proxy to getting the app to the api relatively safely
- hardly used, could potentially be used for much more server-side fun
- some hardcoded values... would be better off elsewhere