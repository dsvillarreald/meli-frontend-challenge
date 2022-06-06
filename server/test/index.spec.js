const itemService = require('../services/item.service');
const mock = require('./mocks');

const axios = require('axios').default;

describe('Item Service getItems', () => {
  it('should be response 200 and return data', () => {
    axios.get = jest.fn().mockImplementation(() => ({
      items: mock.itemsMock
    }));

    itemService.getItems('').then(result => {
      expect(result.items.length).toBe(4);
    });
  });

  it('should be response 404 data not found', () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    itemService.getItems('').then(result => {
      expect(result.status).toBe(404);
    });
  });
});

describe('Item Service getItemsById', () => {
  it('should be response 200 and return data', () => {
    axios.get = jest.fn().mockImplementation(() => ({ data: mock.itemsMock[1] }));

      itemService.getItemsById('MLA905558387').then(result => {
      expect(result.data.id).toBe('MLA905558387');
    });
  });

  it('should be response 404 data not found', () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    itemService.getItemsById('MLA905558387').then(result => {
      expect(result.status).toBe(404);
    });
  });
});

describe('Item Service getItemCategoryById', () => {
  it('should be response 200 and return data', () => {
    axios.get = jest.fn().mockImplementation(() => ({ data: mock.categoryMock }));

      itemService.getItemCategoryById('MLA53801').then(result => {
      expect(result.data.id).toBe('MLA53801');
    });
  });

  it('should be response 404 data not found', () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    itemService.getItemCategoryById('MLA53801').then(result => {
      expect(result.status).toBe(404);
    });
  });
});

describe('Item Service getDescriptionById', () => {
  it('should be response 200 and return data', () => {
    axios.get = jest.fn().mockImplementation(() => ({
      data: mock.descriptionMock
    }));

    itemService.getDescriptionById('MLA905558387').then(result => {
      expect(result.data.plain_text).not.toBeNull();
    });
  });

  it('should be response 404 data not found', () => {
    axios.get = jest.fn().mockImplementation(() => ({ status: 404 }));

    itemService.getDescriptionById('MLA905558387').then(result => {
      expect(result.status).toBe(404);
    });
  });
});