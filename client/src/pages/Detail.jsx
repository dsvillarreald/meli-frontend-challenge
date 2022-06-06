import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Purchase from '../shared/Purchase';
import { useDispatch } from 'react-redux';
import { getDetailItem } from '../store/slices/items';
import { objectNotEmpty } from '../utils';
import Loading from '../shared/Loading';

const Detail = () => {

    const dispatch = useDispatch();

    const { detail } = useSelector(state => state.items);
    const { loading } = useSelector(state => state.items);

    const [detailItem, setDetailItem] = useState({});
    const [purchaseData, setPurchaseData] = useState({});
    const {id} = useParams();
    

    useEffect(() => {
        dispatch(getDetailItem(id));
    }, []);

    useEffect(() => {
        setDetailItem(detail);
    }, [detail]);

    useEffect(() => {
        if (objectNotEmpty(detailItem)) {
            const data = {
                id: detailItem.id, 
                condition: detailItem.condition, 
                title: detailItem.title, 
                price: detailItem.price.amount,
                sold_quantity: detailItem.sold_quantity
            }
            setPurchaseData(data);
        }
    }, [detailItem]);

    return ( 
        
        <div className='general-card'>
            {
                loading ? <Loading /> :
                objectNotEmpty(detailItem) ? 
                    <div>
                        <div className='detail'>
                            <img src={detailItem.picture} className="detail__image"></img>
                            <Purchase key={detailItem.id} data={purchaseData}/>
                        </div>
                        <div className='detail__description'>
                            <div className='title'>Descripción del Producto</div>
                            <div className='body'>{detail.description}</div>
                        </div>
                    </div> : null
            }
        </div>
    );
}
 

export default Detail;