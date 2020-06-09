import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8000'
});

export const getItems = async () => {
    return client.get('/items').then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

export const getItemById = async (itemId: string) => {
    return client.get('/items', {
        params: {
            id: itemId
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

// todo - have to create own file for storing interfaces like this
export interface Item {
    title: string;
    order?: number;
    checked?: boolean;
}

export const createNewItem = async (newItem: Item) => {
    return client.post('/items', {
        data: {
            newItem
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

export const deleteItem = async (itemId: string) => {
    return client.delete('/items', {
        params: {
            id: itemId
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

export const updateItem = async (itemsId: string, updatedData: Item) => {
    return client.put('/items', {
        params: {
            id: itemsId
        },
        data: {
            updatedData
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}