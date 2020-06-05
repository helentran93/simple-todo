let items = [];

module.exports = {
    getItems: () => {
        return items;
    },
    getItemById: (itemId) => {
        return items.find(item => item.id === itemId);
    },
    createNewItem: (newItem) => {
        return items.push(newItem);
    },
    deleteItem: (itemId) => {
        return items.filter(item => item.id !== itemId);
    },
    updateItem: (itemId, updated) => {
        const itemIndex = items.findIndex(item => item.id === itemId);
        items[itemIndex] = updated;
        return items;
    }
}