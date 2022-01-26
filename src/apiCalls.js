import axios from "axios"

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    const res = await axios.post("auth/login", userCredentials)
    .catch(err =>(
        dispatch({ type: "LOGIN_FAILURE", payload: err})
    )
    )
    dispatch({type: "LOGIN_SUCCESS", payload: res.data})
}