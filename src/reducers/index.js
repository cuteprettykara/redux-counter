import * as types  from '../actions/ActionTypes';

// [최초 변화를 일으키기 전] 가지고 있어야 할 초기 상태를 정의합니다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

function counter(state=initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;

  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      }

    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length-1)
      }

    case types.INCREMENT:
      return {
        counters: counters.map((counter, index) => 
          (action.index === index)
            ? {
              number: ++counter.number,
              color: counter.color
            } 
            : counter
        )
      }

    case types.DECREMENT:
      return {
        counters: counters.map((counter, index) => 
          (action.index === index)
            ? {
              number: --counter.number,
              color: counter.color
            } 
            : counter
        )
      }

    case types.SET_COLOR:
      return {
        counters: counters.map((counter, index) => 
          (action.index === index)
            ? {
              number: counter.number,
              color: action.color
            } 
            : counter
        )
      }
  
    default:
      return state;
  }
}

export default counter;