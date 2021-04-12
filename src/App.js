import React,{useEffect,useState} from 'react'
import Login from './components/login'
import Player from './components/player'
import {getTokenFromResponse} from './spotify'
import spotify from 'spotify-web-api-js'
import {useDatalayerValue} from './components/datalayer'



const s =new spotify();


function App() {

  
  const [{user,token,item,playing},dispatch]=useDatalayerValue();

  useEffect(() => {
    const hash =getTokenFromResponse();
     window.location.hash="";

     let _token = hash.access_token;


 if(_token){

  dispatch({
    type: "SET_TOKEN",
    token: _token,
  });

   


   s.setAccessToken(_token);

   s.getMe().then(user=> {
    console.log("user",user)
    dispatch({
      type:'SET_USER',
      user:user,
    })
  });

  s.getPlaylist("7HFqo5r7S9aVzOF4y7dSlF").then((response) =>
  dispatch({
    type: "SET_DISCOVER_WEEKLY",
    discover_weekly: response,
  })
);
  s.getUserPlaylists().then((playlists)=> {
    dispatch({
      type:'SET_PLAYLISTS',
      playlists:playlists
    })
  })
  s.getMyCurrentPlaybackState().then((r)=>{
    console.log("playback",r)
    dispatch({
      type: "SET_PLAYING",
      playing: r.is_playing,
    });

    dispatch({
      type: "SET_ITEM",
      item: r.item,
    });
  })

}

  
   
  },[])
 


  return (
    <div className="App">
     
     {
        token ? (
       <Player spotify={s}/>
         ):(
          <Login/>

        )
        } 
       
    
   
    </div>
  );
}

export default App;
