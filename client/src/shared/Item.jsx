import React from 'react';
import icShipping from '../sass/assets/ic_shipping.png';
import { useNavigate } from "react-router-dom";
import { currencyTransform } from '../utils';

const Item = ({item}) => {

    const { id, condition, picture, title, location,
        price, free_shipping: freeShipping } = item;
    const native = useNavigate();

    const redirectDetail = () => {
        native(`/item/${id}`);
    }

    return ( 
        <div className='item'>
            <img src={picture} className='item__image' onClick={redirectDetail}></img>
            <div className='content-info'>
                <div className='item__price' onClick={redirectDetail}>
                    { currencyTransform(price.amount) }
                    {
                        freeShipping ? <img src={icShipping} 
                            className='icon-shipping'></img> : null
                    }
                </div>
                <div className='item__title' onClick={redirectDetail}>{title}</div>
                <div className='item__condition'>
                    {condition ? 'Nuevo' : 'Usado'}
                </div>
            </div>
            <div className='content-location'>
                <div className='item__location'>{location}</div>
            </div>
        </div> 
    );
}
 
export default Item;