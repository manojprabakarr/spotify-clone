

export const initialstate ={
    user:null,
    token:null,
    playlist:[],
    item:null,
    discover_weekly: null,
    playing:false,
   

   
  
};


const reducer =(state ,action ) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return  {
                ...state,
                user:action.user
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token:action.token
                };
                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists:action.playlists
                    }
                    case 'SET_DISCOVER_WEEKLY':
                        return {
                            ...state,
                            discover_weekly:action.discover_weekly
                        }
                        case 'SET_PLAYING' :
                            return {
                                ...state,
                                set_playing:action.set_playing
                            }
                            case 'SET_ITEM' :
                                return {
                                    ...state,
                                    set_item:action.set_item
                                }
                       
            default:
            return state;
    }
}
export default reducer;

