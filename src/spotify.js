

export const authpoint=`https://accounts.spotify.com/authorize`

const clientId=  "97c01f92dd6c49c5b586d9110d5072b5";

const redirect ="http://localhost:3000/"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };



  export const accessUrl = `${authpoint}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;