const {v4: uuidv4} = require('uuid');
let items = [];

module.exports = {
    getItems: () => {
        return items;
    },
    getItemById: (itemId) => {
        if (itemId && typeof itemId === 'string') return items.find(item => item.id === itemId);
        return {};
    },
    createNewItem: (newItem) => {
        if(newItem.title !== '' && typeof newItem.title === 'string') {
            newItem.id = uuidv4();
            newItem.order = items.length + 1;
            newItem.checked = false;
            items.push(newItem);
            return newItem;
        } else {
            return {};
        }
    },
    deleteItem: (itemId) => {
        items = items.filter(item => item.id !== itemId);
        return items;
    },
    updateItem: (itemId, updated) => {
        const itemIndex = items.findIndex(item => item.id === itemId);
        if (updated && itemIndex > -1) {
            if (updated.title === '') {
                items = items.filter(item => item.id !== itemId);
                return {};
            }

            items[itemIndex].title = typeof updated.title === 'string' ? updated.title : items[itemIndex].title;
            items[itemIndex].order = typeof updated.order === 'number' && updated.order >= 0 ? updated.order : items[itemIndex].order;
            items[itemIndex].checked = typeof updated.checked === 'boolean' ? updated.checked : items[itemIndex].checked;
        
            return items[itemIndex];
        } else {
            return {};
        }
    }
}