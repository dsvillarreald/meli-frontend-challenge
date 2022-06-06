require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT;

const apiService = require('./services/api.service');

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/items', (request, response, next) => {
    const search = request.query.search;
    if (!!search) {
        apiService.items(search, response, next);
    } else {
        response.status(400).send({ error: 'Search criteria is required' });
    }
});

app.get('/items/:id', (request, response, next) => {
    const id = request.params.id;
    if (!!id) {
        apiService.itemsById(id, response, next);
    } else {
        response.status(400).send({ error: 'The id is required' });
    }
});

app.listen(port, () => console.log(`Server Started on port: ${port}`));