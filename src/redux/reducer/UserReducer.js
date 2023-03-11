// import { LOGIN, LOGOU, LOGOUT } from "../actionTypes";

// const initialState = {
//     UserName: null,
//     FirstName: null,
//     LastName: null,
//     Role: null,
//     UserId: null,
//     RoleId: null
// };

// export default userReducer = (state = initialState , action)=>{
//     switch(action.type){
//         case LOGIN : 
//             return {
//                 ...state,
//                 UserName: state.UserName,
//                 FirstName: state.FirstName,
//                 LastName: state.LastName,
//                 Role: state.Role,
//                 UserId: state.UserId,
//                 RoleId: state.RoleId
//             };

//         case LOGOUT:
//             return{
//                 ...state
//             };
//         default :
//             return state;
//     }
// }

import { createSlice, current } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        UserName: null,
        FirstName: null,
        LastName: null,
        Role: null,
        UserId: null,
        RoleId: null
    },
    reducers: {
        login: (state, action) => {
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.UserName = action.payload.UserName;
            state.Role = action.payload.Role;
            state.UserId = action.payload.UserId;
            state.RoleId = action.payload.RoleId;
            state.value = action.payload;
        },
        logout: (state) => {
            state.FirstName = null;
            state.LastName = null;
            state.UserName = null;
            state.Role = null;
            state.UserId = null;
            state.RoleId = null;
            state.value = null;
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer