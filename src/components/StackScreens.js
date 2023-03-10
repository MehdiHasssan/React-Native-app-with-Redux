import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../feature/counter/Counter';
import TodoScreen from '../Screens/TodoScreen';
import UpdateTodoComponent from './UpdateTodoComponent'


const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (

        <Stack.Navigator>
         <Stack.Screen name = "todoScreen" component={TodoScreen}
         options={{
            title: 'Todo Screen',
            headerTitleAlign: 'center',
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'green',
            },
          }} 
         />
            <Stack.Screen name = "Counter" component={Counter}
             options={{
                title: 'Counter Screen',
                headerTitleAlign: 'center',
                headerShown: true,
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: 'green',
                },
              }}
            />

          <Stack.Screen name = "updateTodo" component={UpdateTodoComponent}
             options={{
                title: 'Update Screen',
                headerTitleAlign: 'center',
                headerShown: true,
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: 'green',
                },
              }}
            />
        </Stack.Navigator>
    
  )
}

export default StackScreens

const styles = StyleSheet.create({})