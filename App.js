import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { store } from './src/app/store/store'
import { Provider } from 'react-redux'
import StackScreens from './src/components/StackScreens'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <StackScreens />

      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})