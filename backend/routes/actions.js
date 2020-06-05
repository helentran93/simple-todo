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
        console.log(typeof newItem);

        newItem.id = uuidv4();
        newItem.order = items.length + 1;
        console.log(JSON.stringify(newItem));
        return items.push(newItem);
    },
    deleteItem: (itemId) => {
        items = items.filter(item => item.id !== itemId);
        return items;
    },
    updateItem: (itemId, updated) => {
        const itemIndex = items.findIndex(item => item.id === itemId);
        items[itemIndex] = updated;
        return items;
    }
}