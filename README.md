Step 1
1) Create Folder
2) Swith to new folder
3) Use command
    - npm init
4) Install needed dependencies
    - npm install express
    - npm install morgan
    - npm install --save-dev nodemon

5) Create gitignore file using template
    - https://github.com/expressjs/express/blob/master/.gitignore

6) Create app.js

7) Start server
    - npm run dev

8) Add project to github

Step 2
1) Create routes
2) Add routes to app.js
3) Test using postman

Step 3
1) Create Value Object
2) Log the Input
3) Return the Value Object

Step 4
1) Add the controller
2) Add the validations
    - npm install express-validator

Step 5
1) Add service

Step 6
1) Add service unit tests
    - npm install --save-dev jest

Step 7
1) Add controller unit tests
    - npm install supertest --save-dev
    - Add mocks to controller tests

Step 8
1) Create database
    - Install MySQL
    - Create database in MySQL
        - create database temperature;
2) Add sequelize library
    - https://sequelize.org/docs/v6/getting-started/
    - npm install --save sequelize
    - npm install --save mysql2
    - Create config file

3) Add env files support
    - npm install dotenv --save
    - Add env extension to gitignore
    - Create env file (this file is not pushed to repo)

4) Add sequelize to the app
    - Modify app.js

5) Create model
    - Create model folder/file
    - Add sequelize operation to the service

6) Validate
    - Start service
    - Send test request in Postman
    - Validate records in DB
        - use temperatureTest;
        - show tables;
        - select * from conversions;