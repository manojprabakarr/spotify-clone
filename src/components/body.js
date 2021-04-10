import React from 'react'
import './body.css'
import Header from './header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDatalayerValue } from './datalayer';

function Body({s}) {
    const [ {discover_weekly},dispatch]=useDatalayerValue();
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

        
      </div>
            
        </div>
    )
}

export default Body
