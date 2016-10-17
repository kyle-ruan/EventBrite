import { connect } from 'react-redux';
import { searchEvents, selectEvent } from '../actions';
import EventList from '../components/EventScreen/EventList';

const mapStateToProps = ({ events }) => (
  {
    events
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    searchEvents: () => {
      dispatch(searchEvents());
    },
    selectEvent: (event) => {
      dispatch(selectEvent(event));
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
