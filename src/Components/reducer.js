export const reducer =(state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElem) => {
            return curElem.id !== action.payload;
            }),
        };
    }
    if(action.type === "INCREMENT"){
        const updatedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload){
                return { ...curElem, quantity: curElem.quantity + 1 };
            }
            return curElem;
        });
        return {...state,item: updatedCart};
    }

    if(action.type ==="DECREMENT"){
        // kis item ke liye click kia
        const updatedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload){
                return{...curElem, quantity: curElem.quantity - 1};
            }
            return curElem;
        })
        // the moment i want to del the item i will filter it out
        .filter((curElem) =>  curElem.quantity !== 0);
        return{...state, item: updatedCart};
    }
   
    if(action.type === "GET_TOTAL") {
        let { totalItems, totalAmount } = state.item.reduce(
            (accum, curVal) => {
            let {price, quantity } = curVal;

            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount
            accum.totalItem += quantity;
            return accum;
        },
        {
            totalItems:0,
            totalAmount:0,
        }
    );
    return { ...state, totalItems, totalAmount };
}
    return state;
};