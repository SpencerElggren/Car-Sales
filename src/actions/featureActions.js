export const addFeature = ( name, price) => {
    return function (dispatch) {
        dispatch({
            type: 'ADD_FEATURE',
            name,
            price
        })
    }
};

export const removeFeature = ( name, price) => {
    return function (dispatch) {
        dispatch({
            type: 'REMOVE_FEATURE',
            name,
            price
        })
    }
};