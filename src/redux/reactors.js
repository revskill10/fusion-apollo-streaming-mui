import {withRPCReactor} from 'fusion-plugin-rpc-redux-react';

export const increment = withRPCReactor('increment', {
  success: (state, action) => {
    return {
      value: action.payload.value,
      log: [
        ...state.log,
        {
          type: 'incremented',
          timestamp: new Date().toString(),
          newValue: action.payload.value
        }
      ]
    }
  }
});

export const decrement = withRPCReactor('decrement', {
  success: (state, action) => {
    return {
      value: action.payload.value,
      log: [
        ...state.log,
        {
          type: 'decremented',
          timestamp: new Date().toString(),
          newValue: action.payload.value
        }
      ]
    }
  }
});
