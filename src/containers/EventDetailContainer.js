import { connect } from 'react-redux';
import EventDetail from '../components/EventDetailScreen/EventDetail';

const mapStateToProps = ({ selectedEvent }) => (
  {
    selectedEvent
  }
);

export default connect(
  mapStateToProps
)(EventDetail);
