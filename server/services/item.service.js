require('dotenv').config();
const axios = require('axios');
const limit = process.env.APP_LIMIT;
const apiUrl = `${process.env.APP_ENDPOINT}`;
const reg = `${process.env.APP_REGION}`;

const getItems = async (search) => {
    try {
        return await axios.get(`${apiUrl}sites/${reg}search?q=${search}&limit=${limit}`);
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getItemsById = async (id) => {
    try {
        return await axios.get(`${apiUrl}items/${id}`);
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getItemCategoryById = async (id) => {
    try {
        return await axios.get(`${apiUrl}categories/${id}`);
    } catch (error) {
        console.error(error);
        return error;
    }
}

const getDescriptionById = async id => {
    try {
        return await axios.get(`${apiUrl}items/${id}/description`);
    } catch (error) {
        console.error(error);
        return error;
    }
};

module.exports = {
    getItems,
    getItemsById,
    getItemCategoryById,
    getDescriptionById
};