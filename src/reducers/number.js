import * as types from '../actions/ActionTypes';

// [최초 변화를 일으키기 전] 가지고 있어야 할 초기 상태를 정의합니다.
const initialState = {
  number: 0
};

function number(state=initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        number: ++state.number
      }

    case types.DECREMENT:
      return {
        number: --state.number
      }

    default:
      return state;
  }
}

export default number;