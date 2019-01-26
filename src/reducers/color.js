import * as types from '../actions/ActionTypes';

// [최초 변화를 일으키기 전] 가지고 있어야 할 초기 상태를 정의합니다.
const initialState = {
  color: 'black'
};

function color(state=initialState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      }
  
    default:
      return state;
  }
}

export default color;