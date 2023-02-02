# Techstack backend task
I did task with Nest.js, Mongoose and MongoDB.

If you want to deploy it by yourself, specify MongoDB connection string (including database name) in `DATABASE_CONNECTION_STRING` environment variable, otherwise default `mongodb://127.0.0.1:27017/apartments` will be used. 

App will seed some data if you don't have any.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
