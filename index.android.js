import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Raw from 'react-native-htmlview'
import { StackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const htmls = require(`./components/home`)
console.log('outside', htmls)

function buildScreen (name) {
  const html = require(`./components/${name}`)
  console.log(html)

  return (props) => {
    const { navigate } = props.navigation

    return (
      <View style={styles.container}>
        <Raw value={html} onLinkPress={url => navigate(url)} />
      </View>
    )
  }
}

const App = StackNavigator({
  home: { screen: buildScreen('home') },
  about: { screen: buildScreen('about') },
  contact: { screen: buildScreen('contact') }
})

AppRegistry.registerComponent('App', () => App)
