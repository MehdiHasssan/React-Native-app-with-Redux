import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {UpdateTodo} from '../feature/Todos/TodoSlice' 
import { useNavigation } from '@react-navigation/native';

const UpdateTodoComponent = ({route}) => {
    const navigation = useNavigation();
    const [editTodo , setEditTodo] = useState(route.params.name)
    const [editTodoId , setEditTodoId] = useState(route.params.id)
    const dispatch = useDispatch()
  return (
    <View>
       <View style={styles.todoinputView}>
            <TextInput
              style={styles.todoInput}
              value={editTodo}
              onChangeText={(text)=> setEditTodo(text)}
              />
        </View>
        <View style= {styles.addTodoView}>
        <TouchableOpacity style={styles.addTodoButton}
        onPress={()=>{
            dispatch(UpdateTodo({id :editTodoId,  name: editTodo})),
        navigation.navigate('todoScreen'); 
    }} 
        >
            <Text style={styles.addTodoText}>
                Update
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default UpdateTodoComponent

const styles = StyleSheet.create({
    addTodoView:{
        justifyContent:'center',
        alignItems:'center',
        top:27
    },
    addTodoButton:{
        backgroundColor:'green',
        padding:8,

    },
    addTodoText:{
        color:'#fff',
    },
    todoinputView:{
        paddingHorizontal:23,
        width:'100%',
        top:23,
        margin:6
    },
    todoInput:{
        borderWidth:0.5,
    },
})