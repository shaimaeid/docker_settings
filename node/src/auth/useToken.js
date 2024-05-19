/*
Custom hook object
*/
import { useState } from 'react';
// custom hook to set and get the token
export const useToken = () => {
    // setting token in app
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem('token');
    });
    // setting token in local storage
    const setToken = newToken => {
        if(token && newToken===null){
            localStorage.removeItem('token');
        }else{
            localStorage.setItem('token', newToken);
            setTokenInternal(newToken);
        }
        
    }

    // return token object and set function
    return [token, setToken];
}