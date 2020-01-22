import arrayRemove from "../utility/arrayRemove";


const initialState = {
    otherStateProperties: '',
    features: [

    ]
};

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state,
                features: [
                    ...state.features,
                    {  name: action.name, price: action.price}
                ]
            };
        case 'REMOVE_FEATURE' :
            return {
                ...state,
                features: arrayRemove(state.features, (n) => {return n === { name: action.name, price: action.price }})
            };
        default:
            return state;
    }
};