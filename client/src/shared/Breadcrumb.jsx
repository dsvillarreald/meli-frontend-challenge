import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Breadcrumb = () => {

    const { categories } = useSelector(state => state.items);
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        setCategoriesList(categories);
    }, [categories]);

    return (
        <div className='breadcrumb'>
            {
                !!categoriesList ?
                categoriesList.map(
                    category => 
                    <span key={category} 
                        className="breadcrum-description">{category}
                    </span>) : null
            }
        </div>
    )
}

export default Breadcrumb;
