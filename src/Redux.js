const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const produce = require("immer").produce;
const logger = require("redux-logger").createLogger();
const thunk = require("redux-thunk").default
const axios = require("axios");
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () =>{
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users) =>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = (error) =>{
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then((users)=>{
            const usersId = users.data.map((user)=>user.id);
            dispatch(fetchUserSuccess(usersId))
        }).catch((error)=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const initialUserState = {
  name: "Hemang",
  age: 22,
  address: {
    street: "Joravarnagar",
    city: "Surendranagar",
    state: "Gujarat",
  },
};
const initialUsersState = {
 loading: false,
 users: [],
 error: ""
};
const updateCity = (city) => {
  return {
    type: "UPDATE_CITY",
    payload: city,
  };
};
const cityReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "UPDATE_CITY":
      // return{
      //     ...state,
      //     address:{
      //         ...state.address,
      //         city: action.payload
      //     }
      // }
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });
    default: {
      return state;
    }
  }
};
const usersReducer = (state = initialUsersState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                users: action.payload,
                loading:false,
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:{
            return state;
        }
    }
}
const orderCake = (amount) => {
  return {
    type: "ORDER_CAKE",
    quantity: amount,
  };
};
const orderIceCream = (amount) => {
  return {
    type: "ORDER_ICE_CREAM",
    quantity: amount,
  };
};
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "ORDER_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "ORDER_ICE_CREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.quantity,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  city: cityReducer,
  users: usersReducer
});
const store = createStore(rootReducer, redux.applyMiddleware(logger,thunk));
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Ordered:", store.getState())
);
store.dispatch(orderCake(1));
store.dispatch(orderIceCream(1));
store.dispatch(updateCity("Ahmedabad"));
store.dispatch(fetchUsers())
unsubscribe();
