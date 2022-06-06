require('dotenv').config();
const itemService = require('./item.service');
const mapperService = require('./mapper.service');

/**
 * Servicio para recuperar lista de items
 * @param search criterio de búsqueda
 * @param response  respuesta para el cliente
 * @param next funcion next()
 */

const items = async (search, response, next) => {
    const items = await itemService.getItems(search);
    Promise.resolve(items).then(results => {
        response.json({
            author: mapperService.mapperAuthor(),
            categories: mapperService.mapperCategories(results.data.filters),
            items: mapperService.mapperItems(results.data.results, null)
        });
        next();
    }).catch(err => {
        response.send(err);
    });
};

/**
 * Servicio para recuperar un item específico y su desscripción
 * @param id criterio de búsqueda
 * @param response  respuesta para el cliente
 * @param next funcion next()
 */
const itemsById = async (id, response, next) => {
    const itemPromise = await itemService.getItemsById(id);
    const descriptionPromise = await itemService.getDescriptionById(id);
    Promise.all([itemPromise, descriptionPromise]).then((item) => {
        const { category_id: categoryId } = item[0].data;
        const { plain_text: description } = item[1].data;
        const items = [item[0].data];
        itemService.getItemCategoryById(categoryId).then(results => {
            response.json({
                author: mapperService.mapperAuthor(),
                categories: mapperService.getCategoriesName(results.data.path_from_root),
                item: mapperService.mapperItems(items, description)[0]
            });
            next();
        });
    }).catch((err) => {
        response.send(err);
    });
    
}

module.exports = {
    items,
    itemsById
};