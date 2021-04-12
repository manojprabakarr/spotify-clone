import React from 'react'
import Body from './body'
import  './player.css'
import Sidebar from './sidebar'
import Footer from './Footer'

function player({s}) {
    return (

        <div className="player">
            <div className="player-body">
            <Sidebar/>
            <Body s={s}/>

            </div>
           
           <Footer s={s}/>
           
          
        </div>
    )
}

export default player
