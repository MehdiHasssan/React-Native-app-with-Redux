import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoListComponent from '../components/TodoListComponent'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../feature/Todos/TodoSlice'

const TodoScreen = ({navigation}) => {
    const[addTodo, setAddTodo] = useState('')

    const handleAddTodo =()=>{
        if(addTodo.trim().length === 0){
            alert('Please enter something')
            setAddTodo('')
            return;
         }
         dispatch(
            AddTodo({
                todo:addTodo
            })
         )
            setAddTodo("")

        
    }
    const dispatch = useDispatch()

  return (
    <View>
        <TodoHeader />
        {/* Todo TextInput================ */}
        <View style={styles.todoinputView}>
            <TextInput
             placeholder='Enter New TODO Here'
              style={styles.todoInput}
              value={addTodo}
              onChangeText={(text)=> setAddTodo(text)}
              />
        </View>
        {/* Todo TextInput================ */}

        {/* Add TODO button================ */}
        <View style= {styles.addTodoView}>
        <TouchableOpacity style={styles.addTodoButton}
        onPress={handleAddTodo}
        >
            <Text style={styles.addTodoText}>
                Add Todo
            </Text>
        </TouchableOpacity>
        </View>
        {/* Add TODO button================ */}

        {/* Todo List ===================== */}
        <TodoListComponent />
        {/* Todo List ===================== */}

       {/* Counter button ================== */}
        <View style={styles.CounterbuttonView}>
        <TouchableOpacity
         style={styles.Counterbutton}
         onPress={()=>navigation.navigate('Counter')}
         >
            <Text style={styles.CounterbuttonText}>
                Counter Screen
            </Text>
         </TouchableOpacity>
        </View>
       {/* Counter button ================== */}

    </View>
  )
}

export default TodoScreen

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
    CounterbuttonView:{
        justifyContent:'center',
        alignItems:'center',
        top:473,
        // flex:1
    },
    Counterbutton:{
        backgroundColor:'gray',
        padding:8,
    },
    CounterbuttonText:{
        color:'#fff',
    }

})