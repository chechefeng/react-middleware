// import { handleActions } from 'redux-actions';
const initialState = {};

// export default handleActions({
//   [actions.SET_AUTHORS]: (authors, { payload }) => authors.merge(payload)
// }, initialState);


export default function handleActions(state = initialState, action) {
    console.log(action)

    switch (action.type) {

        case "START_NETWORK":
        case "END_NETWORK":
            return initialState;
        case "REGISTRATION_SUBMIT_SUCCESS":

            return Object.assign({}, state,action.params);
            break

        default:
            return initialState;
    }
}