import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisiable, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler (){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler (enteredGoalText){
    setCourseGoals(( currentCourseGoals)=> [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler( );
  }
    function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
      });
    }
  
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#a065ec'
      onPress={startAddGoalHandler}/>
   <GoalInput visible = {modalIsVisiable}
    onAddGoal={addGoalHandler}
    onCancel={endAddGoalHandler}/>
     <View style={styles.inputContainer}> 
     <FlatList 
          data = {courseGoals}
          renderItem= {(itemData) => {
            return (
            <GoalItem 
            text={itemData.item.text}
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
            />);
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}
          />
        </View>  
    </View>
    </>
  );
  
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16,
  },
  inputContainer:{
    flex:4,

  },
 
});
