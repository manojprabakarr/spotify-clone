import { CallToActionSharp } from "@material-ui/icons";

export const initialstate ={
    user:null,
    //token:'BQCJDNxFrfEmVqbe0kC_YwhYDIpelNUQnULMiqmnhLig3AJsMRoqh1YL1TporwOsYpt3Dig47iUH8UrZHHxRGl7EVPxpcn6fdAlLtFe0-S7fkA6mV0jfrU7jCGG6bWVafTdBFdmZe9HYPg_91lxSrzpaH3tQq113Hgt6zUe0s3lEId1u',
    playlist:[],
    item:null,
    discover_weekly: null,
    playing:false
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
            
            default:
            return state;
    }
}
export default reducer;

