import { connect } from 'react-redux';
import { searchEvents, updateCategory, updateCity } from '../actions';
import SearchFilter from '../components/EventScreen/SearchFilter';

const mapStateToProps = ({ filters }) => (
  { filters }
);

const mapDispatchToProps = (dispatch) => (
  {
    searchEvents: () => {
      dispatch(searchEvents());
    },
    updateCategory: (val) => {
      dispatch(updateCategory(val));
    },
    updateCity: (val) => {
      dispatch(updateCity(val));
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);
