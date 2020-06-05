const {v4: uuidv4} = require('uuid');
let items = [];

module.exports = {
    getItems: () => {
        return items;
    },
    getItemById: (itemId) => {
        return items.find(item => item.id === itemId);
    },
    createNewItem: (newItem) => {
        newItem.id = uuidv4();
        newItem.order = items.length + 1;
        newItem.checked = false;
        return items.push(newItem);
    },
    deleteItem: (itemId) => {
        items = items.filter(item => item.id !== itemId);
        return items;
    },
    updateItem: (itemId, updated) => {
        const itemIndex = items.findIndex(item => item.id === itemId);
        items[itemIndex].title = updated.title ? updated.title : items[itemIndex].title;
        items[itemIndex].order = updated.order ? updated.order : items[itemIndex].order;
        items[itemIndex].checked = updated.checked ? updated.checked : items[itemIndex].checked;
        return items;
    }
}