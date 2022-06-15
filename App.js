import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import MyList from './src/components/MyList';


class App extends Component {

  render() {
    return (

      <View>
        <ScrollView>
          <MyList></MyList>
        </ScrollView>
      </View>

    );
  }
}

export default App;
