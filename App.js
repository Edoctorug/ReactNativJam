import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const [fname, onChangeFname] = React.useState("First Name");
  const [lname, onChangeLname] = React.useState("Second Name");
  const [email, onChangeEmail] = React.useState("Email");
  const [phone, onChangePhone] = React.useState("Phone Number");
  const [password, onChangePassword] = React.useState("Password");
  const [cpassword, onChangeCpassword] = React.useState("Re-enter Password");

  return (
    <ImageBackground source={require("./assets/edocbg.jpg")} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "DBE4E4",
              textAlign: "center",
              fontSize: 60,
            }}
          >
            Sign-Up
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "DBE4E4",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            To use EdoctorUg,
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            you have to please register!
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFname}
            value={fname}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeLname}
            value={lname}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            // secureTextEntry={true}
            textContentType="oneTimeCode"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCpassword}
            value={cpassword}
          />
          <TouchableOpacity>
          <Text style={styles.sign}>
            SignUp
          </Text>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    fontWeight : 'bold',
    height: 40,
    width: 200,
    margin: 10,
    borderBottomWidth: 2,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    borderColor: 'white',
    padding: 11,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  container: {
    padding: 50,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "#ffff",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },
  sign: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    backgroundColor: "#A1ECCB",
    textAlign: "center",
    height: 60,
    width: 200,
    margin: 10,
    padding: 11,
    
    borderRadius: 30,
  },
});
