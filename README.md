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
    -Once you have written the above code go to root directory and execute `npx sequelize db:create`
    -`npx sequelize db:migrate`

## DB Design
    -Airplane Table (id, model_number, capacity)
    -Flight (id, airplane_id, airport_id, src_city_id, departure_airport_id, dest_airport_id, departure_time, arrival_time, departure_date, arrival_date)
    -Airport (id, city_id, name, address)
    -City (id, name)

    -An airport can have many flights but a flight belongs to one airport
    -A city has many airports but an airport belongs to one city
    -An airplane can be used for many flights but a flight belongs to an airplane