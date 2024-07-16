import {createSlice} from '@reduxjs/toolkit'
const initialState=
    {
        user:null,
        status:false
    }



const authSlice=createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login:(state,action)=>{
            state.status=true;
            state.user=action.payload;
        },
        logout:(state,action)=>{
            state.status=false;
            state.user=null;
        }
    }
}
)

export default  authSlice.reducer;

export const {login,logout} = authSlice.actions;