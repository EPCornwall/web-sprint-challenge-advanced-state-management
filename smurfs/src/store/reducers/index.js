//// import action creators
import{
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    UPDATE_FORM
} from '../actions';

///set initial state
const initialState = {
    smurfs: [],
    loadingSmurfs: true,
    errorMessage: "",
}


///write reducer with switch statements

export default (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_SMURFS:
            return{
                ...state,
                loadingSmurfs: true
            };
        case FETCH_SMURFS_ERROR:
            return{
                ...state,
                loadingSmurfs: false,
                errorMessage: action.payload.message
            };
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                loadingSmurfs: false
            };
        default:
            return state
    }
}