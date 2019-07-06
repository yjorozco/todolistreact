export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL';

export const updateList = update => ({
    type: UPDATE_LIST,
    payload: update,
})



export const updateItem = item => ({
    type: UPDATE_ITEM,
    payload: item,
})

export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id,
})

export const removeItems = () => ({
    type:REMOVE_ALL_ITEMS,
    payload: []
})