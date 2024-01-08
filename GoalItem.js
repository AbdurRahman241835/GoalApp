import {StyleSheet, View, Text, Pressable} from 'react-native'
function GoalItem(props){
    return(
        
                <View  style ={styles.goalItem} > 
                    <Pressable onPress={props.del}
                               style = {({pressed})=> pressed && styles.pressedItem}>
                            <Text style={styles.goalText}>{props.text}</Text>
                    </Pressable>
                </View>
        
        
    )
}

const styles = StyleSheet.create({
    goalItem:{
      marginTop: 15,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      },
      goalText:{
        color:'white',
        margin:6,
        padding:5,
      },
      pressedItem:{
        opacity:0.5,
        backgroundColor:'#a797cc',
      }

})

module.exports = GoalItem;