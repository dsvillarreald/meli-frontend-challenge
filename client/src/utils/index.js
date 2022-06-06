/**
 * Función para transformar un number en formato currency
 * @param amount número a transformar
 */
export const currencyTransform = amount => {
    amount = typeof amount === 'number' 
        ? amount : parseFloat(amount);
    return amount.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
}

/**
 * Función para validar un objeto vacio
 * @param object el objeto a validar
 */
export const objectNotEmpty = object => {
    return Object.keys(object).length > 0;
}