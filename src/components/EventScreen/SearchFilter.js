import React, { Component } from 'react';
import { SearchBar, Button } from 'react-native-elements';
import { Container } from '../common';

class SearchFilter extends Component {
  render() {
    const { filters: { category, city } } = this.props;
    return (
      <Container style={{ justifyContent: 'space-around' }}>
        <SearchBar
          lightTheme
          containerStyle={{ marginTop: 10 }}
          value={category}
          onChangeText={(val) => this.props.updateCategory(val)}
          placeholder='Category'
        />
        <SearchBar
          lightTheme
          value={city}
          onChangeText={(val) => this.props.updateCity(val)}
          placeholder='City'
        />

        <Button
          buttonStyle={{
            alignItems: 'stretch',
            marginTop: 10,
            marginLeft: 0,
            marginRight: 0
          }}
          small
          icon={{ name: 'cached' }}
          title='Search'
          onPress={() => this.props.searchEvents()}
        />

      </Container>
    );
  }
}

export default SearchFilter;
