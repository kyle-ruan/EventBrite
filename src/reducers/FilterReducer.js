export default (state = { category: 'Javascript', city: 'Melbourne' }, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORY':
      return { ...state, category: action.payload.category };

    case 'UPDATE_CITY':
      return { ...state, city: action.payload.city };

    default:
      return state;
  }
};
