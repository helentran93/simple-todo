const actions = require('../routes/actions');

describe('todo list', () => {
    describe('adding a new item', () => {
        test('it should add a new item to the list', () => {
            const newItem = actions.createNewItem({title: 'Buy some milk'});
            expect(newItem).not.toEqual({});
        });
    
        test('it should not add an empty named item', () => {
            expect(actions.createNewItem({title: ''})).toEqual({})
        });
    
        test('it should not accept any other types than string', () => {
            expect(actions.createNewItem({title: false})).toEqual({});
            expect(actions.createNewItem({title: 1234})).toEqual({});
        });
    });
    
    describe('updating the item', () => {
        const newItem = actions.createNewItem({title: 'Call Mom'});
        test('it should not update item if the id and/or name is not given', () => {
            expect(actions.updateItem('', {})).toEqual({});
            expect(actions.updateItem(newItem.id, {title: ''})).toEqual({});
        });
    
        test('it should not update item if the given value of the property is invalid', () => {
            expect(actions.updateItem(newItem.id, {title: false, order: 2, checked: false})).toEqual({});
            expect(actions.updateItem(newItem.id, {title: 'Buy a book', order: '', checked: false})).toEqual({});
            expect(actions.updateItem(newItem.id, {title: 'Buy a book', order: 2, checked: 'false'})).toEqual({});
        });
    
        test('it should update the item from the list', () => {
            expect(actions.updateItem(newItem.id, {title: 'Call the doctor', order: 2, checked: false})).not.toBe({});
            expect(actions.updateItem(newItem.id, {title: 'Call Dad', order: 4, checked: false})).not.toBe({});
            expect(actions.updateItem(newItem.id, {title: 'Call Dad', order: 4, checked: true})).not.toBe({});
        });
    
        test('it should remove the item from the list if no new title is given', () => {
            expect(actions.updateItem(newItem.id, {title: '', order: 2, checked: false})).toEqual({});
        });
    });
    
    describe('removing the item', () => {
        const newItem = actions.createNewItem({title: 'Remove new item from the list'});
        test('it should not remove the item if id is invalid', () => {
            expect(actions.deleteItem(1234).length).not.toBe(2);
            expect(actions.deleteItem('').length).not.toBe(2);
        });
    
        test('it should remove the item if the id exists', () => {
            expect(actions.deleteItem(newItem.id)).toEqual(actions.getItems());
        });
    });
    
    describe('getting the item(s)', () => {
        const newItem = actions.createNewItem({title: 'Pay the bills'});
        test('it should not fetch the item if id is invalid', () => {
            expect(actions.getItemById(123)).toEqual({});
            expect(actions.getItemById('')).toEqual({});
            expect(actions.getItemById(false)).toEqual({});
        });
    
        test('it should not fetch the item if id is empty', () => {
            expect(actions.getItemById(null)).toEqual({});
        });
    
        test('it should fetch the item if id is valid', () => {
            expect(actions.getItemById(newItem.id)).toEqual(newItem);
        });
    })
})