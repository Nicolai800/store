import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice ({
    name: "like",
    initialState: {
        likesData: {},
        likesCounter: 0,
        likesId: null
    },
    reducers: {
        toggleToLikes: (state, {payload}) => {
            const {articul} = payload
            if(!state.likesData[articul]){
                state.likesData[articul] = "liked";
                state.likesCounter++
            }else if(state.likesData[articul] === "liked"){
                delete state.likesData[articul];
                state.likesCounter--
            }
        },
        setLikesId: (state, action) => {
            const {id} = action.payload;
            state.likesId = id;
        }
    }
});

export const {setLikesId, toggleToLikes} = likeSlice.actions;
export default likeSlice.reducer;