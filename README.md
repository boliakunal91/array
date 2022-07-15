# Cypress Test


### Tech Used
- [Cypress v9.7.0](https://docs.cypress.io/guides/references/changelog)
- [Cypress-docker image- cypress/browsers:node16.14.2-slim-chrome100-ff99-edge](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers)
- Node v16.13.1 (npm v8.1.2)
- Prettier v2.6.2
- mochawesome v7.1.3
- mochawesome-merge v4.2.1
- mochawesome-report-generator v6.2.0
- VS Code v1.66.2
Note: Your mac system just requires docker to be installed and running. No other setup is required. Docker image has node v16.14.2, chrome v100, firefox v99 and edge support along with all operating system dependencies. 

### Run Cypress Locally 

##### 1. To run the spec in the Cypress UI Interface
Prerequisites: Install npm v16.13.1 or higher on the system
```
$ npm install
$ npx cypress open
```

Then click on the spec to run. 

Note: This will run in Electron browser by default. Separate chrome installation will be needed if you need to run it on chrome.
By default it will target the baseURL defined in cypress.json. 

##### 2. To run the spec in headless mode from Terminal
```
$ npx cypress run 
```
#### Access Reports and Video/Screenshot

Mochawesome will generate a JSON and HTML report under ```results/data``` folder
Videos and Screenshots could be accessed in ```results/``` folder
- If combined JSON or HTML report of multiple specs or multiple run is needed then run:
```
$ npm run cy:report
```
#### (Optional) Run test using docker
Prerequisites: Docker must be up an running on your mac

When running for the first time 
In root folder on terminal:
```
$ cd array
$ docker build -t cypress-image:1.0.0 . && docker run -it -v $PWD:/cypress-project -w /cypress-project -t cypress-image:1.0.0 --browser chrome --headed
```
Run this part only for subsequent runs (make sure you didn't remove your local docker image)

```
$ docker run -it -v $PWD:/cypress-project -w /cypress-project -t cypress-image:1.0.0 --browser chrome --headed
```
#### (Optional) Run test with docker and additional command's arguments

Additional arguments could be appended to the docker run script
-   ```--config video=false```
-   ```--config video=true```
-   ```--browser chrome```
-   ```--browser firefox```
-   ```--browser edge```
-   ```--headless```
-   ```--headed```
-   ```--spec "cypress/integration/array-login.spec.js"``` this could be ```,``` seperated or regex value like ```"cypress/integration/*.spec.js"```

    Note: Stability of this test is only verified on chrome as of now.
     sample script for running a single test spec on chrome headless version with video recording turned off
    
```
$ docker run -it -v $PWD:/cypress-project -w /cypress-project -t cypress-image:1.0.0 --config video=false --browser chrome --headless --spec "cypress/integration/array-login.spec.js"
```




---

