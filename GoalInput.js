import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'
import { useState } from 'react';

function GoalInput(props){

    const [enteredGoalText,setEnteredGoalText]=useState("");



    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        props.onclose();
      }


    return(

      <Modal visible={props.visibles} animationType='slide'>
          <View style={styles.inputContainer}>
              <Image style= {styles.image} source={require('./assets/Goal.png')} />
            <TextInput 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                placeholder=" Enter your Goal here"
            />
            <View style = {styles.buttonContainer}>
              <View style = {styles.button}>
                  <Button color={'#f31282' }   title='Cancel' onPress={props.onclose}/>
              </View>
              <View style = {styles.button}>
                  <Button color={'#5e0acc' }  title='Add Goal' onPress={addGoalHandler}/>
              </View>
            </View>
          </View>
      </Modal>
       
    )

}
const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: '#1A0037',
        flex :1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:16,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        padding: 16,
        paddingBottom: 24,
      },
      textInput: {
        borderWidth: 1,
        borderColor:'#cccccc',
        width: '100%',
        padding: 8,
        borderRadius : 6,
        backgroundColor:'#e4d0ff'
      },
      buttonContainer:
      {
        flexDirection : 'row',
        marginTop:16,
       
      },
      button:{
          width:100,
          marginRight:8,
      },
      image:{
        width:100,
        height:100,
        margin:20
      }

})

module.exports = GoalInput;