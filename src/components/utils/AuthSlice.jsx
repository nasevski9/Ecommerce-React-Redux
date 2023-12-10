import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            email: "",
            password: "",
            authUser: false,
        }
    },
    reducers: {
        login: (state, action) => {
            const userId = action.payload;
            console.log('Received Payload: ', userId);

            const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userId.password);
            console.log('Password Validation Result: ', passwordValidation);
            
            state.user = userId;
            
            if (!passwordValidation ) {
                state.user.authUser = false; 
            } else {
                console.log('Setting authUser to true');

                state.user = {
                    ...userId,
                    authUser: true,
                };

                const saveState = JSON.stringify(userId);
                sessionStorage.setItem("authUser", saveState);
                console.log('Session Storage:', sessionStorage.getItem("authUser"));
            }
        },
        logout: (state) => {
            state.user = {
                name: "",
                email: "",
                password: "",
                authUser: false,
            };
            sessionStorage.clear();
        }
    }
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;