#Docker image taken from https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/browsers:node16.14.2-slim-chrome100-ff99-edge
#Create a folder where our project will be stored
RUN mkdir /cypress-project
#Make it our work directory
WORKDIR /cypress-project
#Copy our files to work directory
COPY . /cypress-project
RUN npm install
RUN $(npm bin)/cypress verify
ENTRYPOINT ["npx", "cypress", "run"]
