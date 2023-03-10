import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({
  header:{
    justifyContent:'center',
    alignItems:'center',
    top:12
  },

  text:{
    fontWeight:'bold',
    fontSize:16,
    fontFamily:'Cochin'
    
  }
})