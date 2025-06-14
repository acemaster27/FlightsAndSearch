# Welcome to Flights Service

## Project Setup
-Clone the project on your local
-Execute `npm install` on the same path as your root directory of the downloaded project
-Create a `.env` file in your root directory and add the following environment variables
    -`PORT=3000`
-Inside the config/config.json add the following
    ```
        {
            "development": {
              "username": "<YOUR_DB_LOGIN_NAME>",
              "password": "<YOUR_DB_PASSWORD>",
              "database": "Flights_Search_DB_DEV",
              "host": "127.0.0.1",
              "dialect": "mysql"
            }
        }
    ```