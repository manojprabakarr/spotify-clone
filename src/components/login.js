import React from 'react'
import './login.css'
import {accessUrl} from '../spotify'

function login() {
    return (
        <div className="login">
            <img   src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg" alt=""/>

           
                <a href={accessUrl} >Login With Spotify</a>
            
            
        </div>
    )
}

export default login
