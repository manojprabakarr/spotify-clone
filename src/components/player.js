import React from 'react'
import Body from './body'
import  './player.css'
import Sidebar from './sidebar'
import Footer from './Footer'

function player({spotify}) {
    return (

        <div className="player">
            <div className="player-body">
            <Sidebar/>
            <Body/>

            </div>
           
           <Footer/>
           
          
        </div>
    )
}

export default player
