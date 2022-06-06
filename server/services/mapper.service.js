/**
 * Servicio para mappear la extructura de item
 * @param response  respuesta para el cliente
 * @param description descripción del item
 */
  const mapperItems = (response, description) => {
    const itemsFormat = [];
    response.forEach(element => {
    item = {
      id: element.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: element.price.toFixed(0),
        decimals: element.price % 1,
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
      sold_quantity: element.sold_quantity
    }
    if (!!description) {
      item.description = description;
    }
    if (!!element.address) {
      const { state_name: state } = element.address;
      item.location = !!state ? state : null;
    }
      itemsFormat.push(item);
    });
    return itemsFormat;
  }

/**
 * Servicio para mappear la extructura de Categorias
 * @param filters Lista de categorías
 */
  const mapperCategories = ([filters]) => {
    const { path_from_root: list } = filters.values[0];
    return getCategoriesName(list); 
  }

  const getCategoriesName = categories => {
    return categories.map((category) => {
      return category.name;
    });
  }
  
  const mapperAuthor = () => (
    { 
      name: 'David Sebastian',
      lastname: 'Villarreal Díaz' 
    }
  );

  module.exports = {
    mapperItems,
    mapperCategories,
    mapperAuthor,
    getCategoriesName
  };