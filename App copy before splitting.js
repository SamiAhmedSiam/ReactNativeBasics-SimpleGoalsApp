// //import { StatusBar } from 'expo-status-bar';
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   ScrollView,
//   FlatList,
// } from "react-native";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     //console.log(enteredText);
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     //console.log(enteredGoalText);
//     //setCourseGoals([...courseGoals, enteredGoalText]);
//     setCourseGoals((currentCourseGoals) => [
//       ...courseGoals,
//        {text: enteredGoalText, key: Math.random().toString()},
//       ]);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="My Course Goal"
//           onChangeText={goalInputHandler}
//         />
//         <Button title="Add Goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalContainer}>
//         {/* <ScrollView> */}
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => {
//             //itemData.index
//             return (
//               <View style={styles.goalItem}>
//                 <Text style={styles.goalText}>{`${itemData.index + 1}. ${
//                   itemData.item.text}`}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={(item, index) => {
//             return item.key;
//           }}
//           alwaysBounceVertical={false}
//         />
//         {/* <Text>List of goals...</Text> */}
//         {/* {courseGoals.map((goal, i) => ( */}
//         {/* ))} */}
//         {/* </FlatList> */}
//         {/* </ScrollView> */}
//       </View>
//     </View>
//   );
// }
// //<Text> بسم الله الرحمن الرحيم</Text>
// //<StatusBar style="auto" />

// const styles = StyleSheet.create({
//   appContainer: {
//     //padding: 50,
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderColor: "#cccccc",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "70%",
//     marginRight: 8,
//     padding: 8,
//   },
//   goalContainer: {
//     flex: 5,
//   },
//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc", //3399ff
//   },
//   goalText: {
//     color: "white",
//   },
// });
