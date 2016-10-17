import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import SelectEventReducer from './SelectEventReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  events: EventsReducer,
  selectedEvent: SelectEventReducer,
  filters: FilterReducer
});
