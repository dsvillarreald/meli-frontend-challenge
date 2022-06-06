require('dotenv').config();
const axios = require('axios');
const limit = 4;
const apiUrl = 'https://api.mercadolibre.com/';
const reg = 'MLA/';

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