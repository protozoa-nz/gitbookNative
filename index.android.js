import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'
import Raw from 'react-native-htmlview'
import { StackNavigator } from 'react-navigation'
import html from './book/dist/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

function buildScreen (name) {

  return (props) => {
    const { navigate } = props.navigation

    return (
      <ScrollView>
        <View style={styles.container}>
          <Raw value={html[name]} onLinkPress={url => navigate(url)} />
        </View>
      </ScrollView>
    )
  }
}

const routes = Object.keys(html).reduce((sofar, name) => {
  sofar[name] = {screen: buildScreen(name)}
  return sofar
}, {})

const initialRouteName = html['SUMMARY.md'] ? 'SUMMARY.md' : undefined

const App = StackNavigator(
  routes, {initialRouteName}
)

AppRegistry.registerComponent('gitbookNative', () => App)
