import React from 'react';
import logoMeli from '../sass/assets/Logo_ML.png';
import icSearch from '../sass/assets/ic_Search.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from '../store/slices/items';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const dispatch = useDispatch();
    const native = useNavigate();

    const [query, setQuery] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchItems();
        }
    }

    const onClickHandler = (event) => {
        searchItems();
    }

    const searchItems = () => {
        if (!!query) {
            dispatch(getItems(query));
            native('/');
        }
    }

    return (
        <nav className='navbar p-s-height'>
            <div className='navbar__container'>
                <img src={logoMeli} className="navbar__logo" alt="logo Meli"/>
                <div className="search">
                    <input
                        type="text"
                        className="search__input"
                        placeholder="Nunca dejes de buscar"
                        onKeyDown={handleKeyDown}
                        onChange={event => setQuery(event.target.value)}
                    />
                    <button type="submit" className="search__button" 
                    onClick={onClickHandler}
                    >
                        <img src={icSearch}/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;