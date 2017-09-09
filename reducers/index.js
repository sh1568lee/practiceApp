import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default: 
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer'}, action ) => {
    switch (action.type) {
        default: 
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});
//combineReducer는 여러 개의 reducer를 한개로 합칠 때 사용되는 reduxㅓ 내장 메소드

export default counterApp;