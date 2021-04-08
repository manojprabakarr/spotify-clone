// 97c01f92dd6c49c5b586d9110d5072b5-clientid
// 9386f3a844584f948dd2d4b6c59d5640-clientsecret

export const authpoint=`https://accounts.spotify.com/authorize`

const clientId=  " 97c01f92dd6c49c5b586d9110d5072b5";

const redirect ="http://localhost:3000/"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];




  export const accessUrl = `${authpoint}?client_id=${clientId}&redirect_uri=${redirect}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;