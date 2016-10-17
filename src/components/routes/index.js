import { Linking } from 'react-native';
import EventScreen from '../EventScreen';
import EventDetailScreen from '../EventDetailScreen';

const routes = {
  EventScreen: {
    key: 'eventScreen',
    component: EventScreen,
    title: 'Events',
    initial: true,
    rightText: '',
    onRight: null
  },
  EventDetail: {
    key: 'eventDetail',
    component: EventDetailScreen,
    title: 'Event Detail',
    rightText: 'Register',
    onRight: ({ event }) => {
      Linking.openURL(event.url);
    }
  }
};

export default routes;
