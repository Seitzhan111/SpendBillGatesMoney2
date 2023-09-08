import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProductIndex = state.basket.findIndex(
                (product) => product.id === action.payload.id
            );

            if (existingProductIndex !== -1) {
                state.basket[existingProductIndex].count++;
            } else {
                state.basket.push({...action.payload, count: 1});
            }

        },
        removeProduct: (state, action) => {
            const existingProductIndex = state.basket.findIndex(
                (product) => product.id === action.payload.id
            );
            if (existingProductIndex === -1) return ;

            if (state.basket[existingProductIndex].count > 1) {
                state.basket[existingProductIndex].count--;
            } else {
                state.basket.splice(existingProductIndex, 1);
            }
        },
        // setProductCount: (state, action) => {
        //     const { product: gettedProduct, count } = action.payload;
        //     const existingProductIndex = state.basket.findIndex(
        //         (product) => product.id === gettedProduct.id
        //     );
        //     if (existingProductIndex !== -1) {
        //         state.basket[existingProductIndex].count = count;
        //     } else if (existingProductIndex === -1 && count >= 1) {
        //         state.basket.push({...action.payload, count});
        //     }else {
        //         state.basket.splice(existingProductIndex, 1);
        //     }
        // }
    }
});

export const {addProduct, removeProduct} = basketSlice.actions;
export default basketSlice.reducer;