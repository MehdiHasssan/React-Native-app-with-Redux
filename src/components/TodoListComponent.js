import { StyleSheet, Text, View,FlatList,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { deleteTodo } from '../feature/Todos/TodoSlice'
import Icon from 'react-native-vector-icons/AntDesign'



const TodoListComponent = () => {
    const todoData = useSelector((state)=>state.todo)
    const dispatch = useDispatch()


    const deleteItem =(id)=>{
        dispatch(deleteTodo({
            id:id
        }))
    }


    const renderItem = ({item})=>{
        return (
            
            <View style={styles.renderItemView}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>deleteItem(item.id)}
                >
                  <Icon name = "delete" size={23} color="red" right={12} />
                </TouchableOpacity>
            </View>
        )
    }
    

  return (
    <View style={styles.FlatList}>
      <FlatList
      data={todoData}
      keyExtractor={(item)=>item.title}
      renderItem={renderItem}
      />
    

    </View>
    
  )
}

export default TodoListComponent

const styles = StyleSheet.create({
    renderItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#cfdece',
        marginHorizontal:23,
        marginVertical:6,
        padding:12
    },
    text:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
        // paddingVertical:8,
        marginHorizontal:12
        
    },
    button:{
        color:'red',
        fontWeight:18,
        fontSize:'bold'
    },
  FlatList:{
    top:32,
  }
})