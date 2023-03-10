import React from 'react'
import {View,TouchableOpacity,Text} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './CounterSlice'

const Counter= ()=> {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <View style={{justifyContent:'center',alignItems:'center',top:32}}>
        <TouchableOpacity
        style={{backgroundColor:'blue'}}
          onPress={() => dispatch(increment())}>
         <Text style={{color:'white'}}>Increment</Text>
          
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
        style={{backgroundColor:'gray'}}

          onPress={() => dispatch(decrement())}>
            <Text style={{color:'white'}}>Decrement</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Counter