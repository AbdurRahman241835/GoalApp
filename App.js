import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [ListGoal,setListGoal]=useState([]);
  const [isModal,setisModal]=useState(false)
  

  function addGoalhandler(enteredGoalText){
    setListGoal((prev)=>[...prev,enteredGoalText])
  }

  function deleteItem(index){
      const newGoal = ListGoal.filter((el,i) => i !=index )
      setListGoal(newGoal);
  }
 

  function startGoalHandler(){
    setisModal(true)
  }

  function cancelGoalHandler(){
    setisModal(false)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
              <Button onPress = {startGoalHandler} title='Add New Goal' color='#A070D6'/>
              <GoalInput onclose={cancelGoalHandler} visibles = {isModal } onAddGoal={addGoalhandler}  />
              <View style={styles.goalContainer}>
                <FlatList data={ListGoal}
                  renderItem={(itemData) =>{
                    return <GoalItem del={() => deleteItem(itemData.index)} text ={itemData.item}/>
                    }
                  }
                />
              </View>
      </View>

    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex:1,
   paddingTop : 50, 
   paddingHorizontal:16,
   backgroundColor:'#1A0037'
  },
  goalContainer:{
    flex:4, 
  },
  
 
});
