import React from 'react';
import {
  Text,
  Image,
  Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Moment from 'moment';
import { Card, CardSection, Container, Button, Row } from '../common';

const EventListItem = ({ event, selectEvent }) => {
  const defaultImg = 'http://images.clipartpanda.com/question-question_mark_blue.png';
  const image = !event.logo ? defaultImg : event.logo.url;
  return (
    <Card key={event.id}>
      <CardSection>
        <Container style={{ flexWrap: 'wrap' }}>
          <Text style={styles.nameText}>
            {event.name.text}
          </Text>
        </Container>
      </CardSection>

      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Container>
          <Row>
            <Text style={styles.durationText}>
              <Text style={{ fontWeight: 'bold' }}>Duration: </Text>
                {`${Moment(event.end.local)
                .diff(Moment(event.start.local), 'hours', true)} hours`}
            </Text>

            <Text style={styles.dateText}>
              <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                {Moment(event.start.local).format('DD/MMM/YYYY hh:mm')}
              </Text>
          </Row>
        </Container>
      </CardSection>

      <CardSection>
        <Container>
          <Button
            onPress={() => {
              selectEvent(event);
              Actions.eventDetail({ event });
            }}
          >
            MORE DETAILS
          </Button>
        </Container>
      </CardSection>
    </Card>
  );
};

const styles = {
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  durationText: {
    flex: 1,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginRight: 5
  },
  dateText: {
    flex: 1,
    fontSize: 14,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginVertical: 2,
    marginRight: 5
  },
  image: {
    flex: 1,
    height: 200,
    width: null
  }
};

export default EventListItem;
