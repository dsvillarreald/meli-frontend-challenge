import { 
    getItems,
    getDetailItem,
    setItemsList,
    setDetailItem,
    setCategories
} from '../store/slices/items/index';
import { itemsMock, itemMock } from './mocks';
import store from '../store';
import axios from "axios"; 

jest.mock('axios');

describe('Item Duck', () => {
    describe('Actions Items', () => {
        it('getItemsList', () => {
            axios.get.mockResolvedValue({data: itemsMock});
            store.dispatch(getItems('iphone'));
            const { loading } = store.getState().items;

            expect(axios.get).toHaveBeenCalled();
            expect(loading).toBeTruthy();
        });
        it('setItemsList', () => {
            store.dispatch(setItemsList(itemsMock.items));

            const { list, loading } = store.getState().items;
            
            expect(list).toEqual(itemsMock.items);
            expect(loading).toBeFalsy();
        });
        it('getDetailItem', () => {
            axios.get.mockResolvedValue({data: itemMock});
            store.dispatch(getDetailItem('MLA931455240'));
            const { loading } = store.getState().items;

            expect(axios.get).toHaveBeenCalled();
            expect(loading).toBeTruthy();
        });
        it('setDetailItem', () => {
            store.dispatch(setDetailItem(itemMock.item));

            const { detail, loading } = store.getState().items;
            
            expect(detail).toEqual(itemMock.item);
            expect(detail.description).not.toBeNull();
            expect(loading).toBeFalsy();
        });
        it('setCategories', () => {
            store.dispatch(setCategories(itemMock.categories));

            const { categories } = store.getState().items;
            
            expect(categories).toEqual(itemMock.categories);
        });
    });
});