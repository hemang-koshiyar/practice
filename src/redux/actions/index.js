import { BUY_CAKE } from "../constants"

export const buyCake = (amount) =>{
    return (dispatch) =>{
         return dispatch({
            type: BUY_CAKE,
            payload: amount
        })
    }
}