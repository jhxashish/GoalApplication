import {View,Text,StyleSheet,Pressable} from 'react-native';

function goalItem(props){
 return(                 
 <View style={styles.goalItem}>
<Pressable 
android_ripple={{color: '#'}} 
onPress={props.onDeleteItem.bind(this,props.id)}
style={({pressed})=> pressed && styles.pressedItem }>
 <Text style={styles.textColor}>{props.text}</Text>
 </Pressable>
 </View>

);              
}
export default goalItem;
const styles= StyleSheet.create({

    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor: '#5e0acc',
     },
     pressedItem:{
     opacity: 0.5
     },
     textColor:{
      color: 'white',
      padding:8,
 
    
     }
});