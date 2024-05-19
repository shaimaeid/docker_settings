/*
Custom hook object
*/
import { useState } from 'react';
// custom hook to set and get the user from the received token
export const useUser = () => {
    // setting token in app
    const [user, setUserInternal] = useState(() => {
        return localStorage.getItem('user');
    });
    // setting token in local storage
    const setUser = newUser => {
        if(user && newUser===null){
            localStorage.removeItem('user');
        }else{
            localStorage.setItem('user', newUser);
            setUserInternal(newUser);
        }

    }

    // return token object and set function
    return [user, setUser];
}