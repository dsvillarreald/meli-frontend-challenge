import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Item from '../shared/Item';
import Loading from '../shared/Loading';

const Home = () => {

    const { list } = useSelector(state => state.items);
    const { loading } = useSelector(state => state.items);
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        setItemsList(list);
    }, [list]);

    return ( 
        <div className='general-card'>
            {
                loading ? <Loading /> :
                !!itemsList ? 
                itemsList.map((item, index) => 
                    <div key={item.id}>
                        <Item item={item}/>
                        { index < itemsList.length - 1 ?
                            <div className='line'></div> : null } 
                    </div>
                ): null
            }
        </div>
    );
}
 
export default Home;