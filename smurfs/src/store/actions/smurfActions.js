import axios from 'axios';

//export const var = string
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"



//functions to dispatch actions async


///get
///Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch({type: FETCH_SMURFS});
        axios.get("http://localhost:3333/smurfs")
        .then((res) =>{
            console.log(res);
            dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch((error) =>{
            dispatch({
                type: FETCH_SMURFS_ERROR,
                payload: {message: error}
            })
        })
    }
}



///post