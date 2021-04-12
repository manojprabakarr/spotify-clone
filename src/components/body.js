import React from 'react'
import './body.css'
import Header from './header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDatalayerValue } from './datalayer';
import Songrow from './Songrow'

function Body({s}) {
    const [ {discover_weekly},dispatch]=useDatalayerValue();
    const playSong = (id) => {
      s.play({
          uris: [`spotify:track:${id}`],
        })
        .then((res) => {
          s.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };
  
  
    return (
        <div className="body">
            <Header spotify={s}/>
            
            <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
           
           
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <Songrow  playSong={playSong} track={item.track} />
        ))}
        
      </div>
            
        </div>
    )
}

export default Body
