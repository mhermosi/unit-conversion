#### Unit Conversion 


This application is separated in two modules

client: A React Web Application
server: A NodeJS express backend api server

you can run this application in different ways.

The simplest one is run the following command sequence to 
start the dev environment

```
# cd client
# yarn install
# cd ..
# cd server
# yarn install
# yarn dev
```

this option will execute both the express server and the react application.
you will see the Web Page on http://localhost:3000/ and the connection to the
backend is being proxy by package.json directive.


Second option: Docker compose build.

The application is containerized both React Web module and Backend Api Server
you just have to run the following command on the root of the project


```
# docker-compose build
# docker-compose up
```

This will create the images, then run the containers based on the configuration provided
Again you can navigate to http://localhost/

Note: you have to have available the ports 80 and 8080 for the Web Application and Backend
respectively.

To execute the test you can just run on each module (client and server)

```
# yarn test
```

 React Web Application is mocking the services for the testing effort

 Backend service is controlling the spawn of the express server to execute the test cases against the actual
 express server.
 
 A CI/CD Jenkins Pipeline has been created for this project on a provisioned server https://ci.clcklabs.com, you can access to this
 server using your GitHub account.

The Docker Images are being built on DockerHub server as my Jenkins server does not allow me to install extra required binaries to
build the images there. a web hook has been used to trigger the build

The final step is to deploy the scripts and config files to run the generated containers on AWS EC2 instance created for this assignment

You can access the live build on the following url: https://unit.clcklabs.com


