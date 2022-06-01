//import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet,
  //Text,
  View,
  Button,
  //TextInput,
  // ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisibile, setIsModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoal(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* // ADD NEW GOAL BUTTON */}
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#2E8BC0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModalVisibile}
          onAddGoal={addGoalHandler}
          cancel={endAddGoalHandler}
        />
        {/* // FLATLIST */}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem
              index={itemData.index}
              text={itemData.item.text}
                id={itemData.item.id}
                onDeletePress={deleteGoal}
              />;
            }}
            keyExtractor={(item, index) => {
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
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#324ca8'
  },
  goalContainer: {
    flex: 5,
  },
});
