import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Declaración de Inicial State and Reducers (Redux Tooltik)
 */
export const itemSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
        categories: [],
        detail: {},
        loading: false
    },
    reducers: {
        setItemsList: (state, action) => {
            state.list = action.payload;
            state.loading = false;
        },
        setDetailItem: (state, action) => {
            state.detail = action.payload;
            state.loading = false;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setItemsList, setDetailItem, setCategories, setLoading } = itemSlice.actions;
export default itemSlice.reducer;

/**
 * Ation (getItems) para actualización del state
 * @param search criterio de búsqueda para lista de items
 * @param id criterio de búsqueda para el detalle de un item
 * @param dispatch función despachadora hacia el store
 */
export const getItems = search => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`http://localhost:4300/items?search=${search}`)
    .then((response) => {
        const { items, categories } = response.data;
        dispatch(setItemsList(items));
        dispatch(setCategories(categories));
    }).catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
    });
};

export const getDetailItem = id => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`http://localhost:4300/items/${id}`)
    .then((response) => {
        const { item, categories } = response.data;
        dispatch(setDetailItem(item));
        dispatch(setCategories(categories));
    }).catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
    });
}