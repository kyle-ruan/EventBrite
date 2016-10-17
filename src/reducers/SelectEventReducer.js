export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      return action.payload.event;

    default:
      return state;
  }
};
