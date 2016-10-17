import Geocoder from 'react-native-geocoder';

const API_KEY = 'Bearer SZRBEN2CGEUPT57YVMXP';
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';

function search(category, city) {

}

export const searchEvents = () => (
  (dispatch, getState) => {
    dispatch({
      type: 'GET_EVENTS',
      payload: {
        events: []
      }
    });
    const { filters: { category, city = 'Melbourne' } } = getState();
    Geocoder.geocodeAddress(city)
      .then(res => {
        const { position: { lat, lng } } = res[0];
        const locationStr = `&location.latitude=${lat}&location.longitude=${lng}`;
        const FETCH_URL = `${ROOT_URL}?q=${category}${locationStr}`;

        fetch(FETCH_URL, {
          method: 'GET',
          headers: {
            Authorization: API_KEY
          }
        })
        .then((response) => response.json())
        .then(data => {
          const { events } = data;
          dispatch({
            type: 'GET_EVENTS',
            payload: { events }
          });
        });
      });
  }
);

export const selectEvent = (event) => (
  {
    type: 'SELECT_EVENT',
    payload: {
      event
    }
  }
);

export const updateCategory = (category) => (
  {
    type: 'UPDATE_CATEGORY',
    payload: {
      category
    }
  }
);

export const updateCity = (city) => (
  {
    type: 'UPDATE_CITY',
    payload: {
      city
    }
  }
);
