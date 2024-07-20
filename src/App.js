/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {View,Text} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import {Header, Button, Spinner} from './component/common'
import LibraryList from './component/LibraryList'


class App extends Component {
  
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View style={{flex: 1}}>
          <Header headerText='Tech Stack'/>
          <LibraryList />
        </View>
      </Provider>

    )
  }
}


export default App;
