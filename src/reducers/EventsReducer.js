export default (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.payload.events;

    default:
      return state;
  }
};
