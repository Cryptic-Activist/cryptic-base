# Cryptic Base

Orchy Base is an ORM (sequelize, mongoose) wrapper that simplifies the CRUD development. By centralizing all the main features of an ORM in one place.

This node package was build with the microservice architecture in mind, so it is a fit when the software architecture requires a lot of database configuration around all the microservices.

## Installation

Before using the Orchy Base some configuration is required.

### Set up the environment variable

Create an environment variable file `.env` for development purpose.

```
NODE_ENV=development OR staging OR production

ORCHYBASE_POSTGRES_DATABASE=DATABASE
ORCHYBASE_POSTGRES_USERNAME=USERNAME
ORCHYBASE_POSTGRES_PASSWORD=PASSWORD
ORCHYBASE_POSTGRES_HOST=HOST

ORCHYBASE_MONGO_URI=MONGODB_URI

SEQUELIZE_DIALECT=DIALECT
SEQUELIZE_HOST=HOST
SEQUELIZE_USERNAME=USERNAME
SEQUELIZE_PASSWORD=PASSWORD
SEQUELIZE_DATABASE=DATABASE

MONGODB_URI=MONGODB_URI
```

## Usage

To properly use the node package simply instantiate a new object.

```javascript
const crypticbase = new CrypticBase();
```

### Available methods and its parameters
