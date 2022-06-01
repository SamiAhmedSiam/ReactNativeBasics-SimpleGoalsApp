import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    enteredGoalText && props.onAddGoal(enteredGoalText);
    // if(enteredGoalText){
    //   props.onAddGoal(enteredGoalText)
    // }
    enteredGoalText && setEnteredGoalText("");
    // a try: //enteredGoalText && props.cancel;
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goals.jpg")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="My Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContiner}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#0e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    //flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    // borderColor: "#cccccc",
    backgroundColor: "#111b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    //marginRight: 8,
    padding: 16,
    //color: '#ffffff',
  },
  buttonContiner: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    //color: '5e0acc'
  },
  image: {
    width: 100,
    height: 100,
    margin: 40,
  },
});
