[![Maintainability](https://api.codeclimate.com/v1/badges/3668e3e6dec01c497361/maintainability)](https://codeclimate.com/github/sgatana/population-management-system/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3668e3e6dec01c497361/test_coverage)](https://codeclimate.com/github/sgatana/population-management-system/test_coverage)

## Population Management System

An Population management system API is a nodeJs application built with a ExpressJs framework and Postgres Database that allows users to manage locations, sub locations and residents per specified location. 
#### Requirements
 - install sequelize CLI globally `run npm install -g sequelize-cli` or `yarn add -g sequelize-cli`
 - download postgres run `brew install postgresql` if using Mac or Linux Os
### Installation

- clone the repo `https://github.com/sgatana/population-management-system.git`
- cd to the project directory `population-management-system`
- run `yarn install` or `npm install` to install dependencies
- rename `.env.example` to `.env` and update configurations
- create database with the name configured in the .env file run`psql` command and `create database 'database_name'`
- run `sequelize db:migrate` to create data models/tables
- run `yarn start` or `npm start` to start the app
- open `postman` to access endpoints `(the app will run on port: 5000)`. [click here](https://www.getpostman.com/downloads/) to download postman

## Usage

### location endpoints
##### add location

POST: `localhost:5000/api/v1/locations`

```
sample payload
{
	"name": "NYC",
	"address": "3465"
}
```
Response
```
{
    "message": "you have successfully added NYC"
}
```
##### Get all locations 
GET: `localhost:5000/api/v1/locations`

Response
```
{
    locations": [
        {
            "name": "Nairobi",
            "address": "111111",
            "dateAdded": "2019-03-06",
            "totalPopulation": 4,
            "sublocations": [
                {
                    "name": "Kasarani",
                    "population": {
                        "totalMaleResidents": 1,
                        "totalFemaleResidents": 1,
                        "totalResidents": 2
                    }
                },
            ],
            "name": "NYC",
            "address": "222222",
            "dateAdded": "2019-03-06",
            "totalPopulation": 13,
            "sublocations": [
                {
                    "name": "Andela",
                    "population": {
                        "totalMaleResidents": 9,
                        "totalFemaleResidents": 4,
                        "totalResidents": 13
                    }
                },
            ]
        }
    ]
}
```
##### Get location 
GET: `localhost:5000/api/v1/locations/:locationId`

Response
```
{
    "location": {
        "name": "Nairobi",
        "address": "111111",
        "dateAdded": "2019-03-06",
        "totalPopulation": 2,
        "sublocations": [
            {
                "name": "Kasarani",
                "population": {
                    "totalMaleResidents": 1,
                    "totalFemaleResidents": 1,
                    "totalResidents": 2
                }
            }
        ]
    }
}
```
##### Delete location 
DELETE: `localhost:5000/api/v1/locations/:locationId`

Reponse
```
{
    "message": "location successfully deleted"
}
```
### sub_location endpoints

##### create/add sublocation

POST: `localhost:5000/api/v1/sublocations`

```
sample payload:
{
	"name":"runda",
	"locationAddress": "8765"
}
```

Response

```
{
    "message": "successfully added a sublocation"
}
```

### resident endpoints

##### create/add residents
POST: `localhost:5000/api/v1/sublocations/:sub_locationId/residents`

```
sample payload:
{
	"name":"mary",
	"gender": "female"
}
```
```
sample response
{
    "message": "successfully added mary"
}
```
