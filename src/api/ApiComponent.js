import axios from 'axios';
import React from 'react';

export const ApiComponent = () => {
    const saveUser=() => {
        let u={
            name:   'John',
            email: 'john@example.com',
            password: 'password@example.com'

        }
        axios.post('https://primeflixapis.herokuapp.com/api/register', u).then(res => {
            console.log(res);
            console.log(res.data.status)
        console.log(res.data.msg)
        
        }).catch(err => {
            console.log(err);

        })

    }
    const login=() => {
        let u={
            email: 'john@example.com',
            password: 'password@example.com'
    }
    axios.post('https://primeflixapis.herokuapp.com/api/login', u).then(res => {
        console.log(res);  
        console.log(res.data.data.accessToken);
        localStorage.setItem('token', res.data.data.accessToken);  

    })
}
  return <div>
        <button onClick={saveUser}>Save User</button>
        <button onClick={login}>Login</button>
  </div>;
};
