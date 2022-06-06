import React from 'react';
import { currencyTransform } from '../utils';

const Purchase = ({data}) => {

    const {
        condition, title, price,
        sold_quantity: soldQuantity
    } = data;
    return ( 
        <div className='purchase'>
            <div className='purchase__info'>
                { condition === 'new' ? 'Nuevo' : 'Usado'} - {soldQuantity} vendidos
            </div>
            <div className='purchase__title'>{title}</div>
            <div className='purchase__price'>{currencyTransform(price)}</div>
            <button className='purchase__button'>Comprar</button>
        </div>
     );
}
 
export default Purchase;