import React, { useCallback, useState } from "react";

import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";

import { Dropdown } from "react-native-element-dropdown";
import DocumentPicker, { types } from "react-native-document-picker";

const data = [
  { label: "Patiient", value: "patient" },
  { label: "Hospital", value: "hospital" },
  { label: "Doctor", value: "Doctor" },
  { label: "Midwife", value: "Midwife" },
  { label: "Clinic", value: "Clinic" },
];

export default function App() {
  const [fname, onChangeFname] = React.useState("First Name");
  const [lname, onChangeLname] = React.useState("Second Name");
  const [email, onChangeEmail] = React.useState("Email");
  const [phone, onChangePhone] = React.useState("Phone Number");
  const [password, onChangePassword] = React.useState("Password");
  const [cpassword, onChangeCpassword] = React.useState("Re-enter Password");

  const handleSign = () => alert("Registered!");

  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);

  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pickMultiple({
        presentationStyle: "fullScreen",
        type: [types.pdf],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.log("There is an error\n");
      console.warn(err);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: "#0055C1",
      }}
    >
      <ImageBackground
        source={require("./app/assets/edocbg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 60,
            }}
          >
            Sign-Up
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
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
          <View style={styles.containerDropDown}>
            <Dropdown
              style={[styles.input, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select type" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          {fileResponse.map((file, index) => (
            <Text
              key={index.toString()}
              style={styles.uri}
              numberOfLines={1}
              ellipsizeMode={"middle"}
            >
              {file?.uri}
            </Text>
          ))}
          <Button
            style={{
              with: 300
            }}
            title="Select Certificate"
            onPress={handleDocumentSelection}
          />
          <TextInput
            style={[styles.input]}
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
            secureTextEntry={true}
            textContentType="oneTimeCode"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCpassword}
            value={cpassword}
            secureTextEntry={true}
            textContentType="oneTimeCode"
          />
          <TouchableOpacity>
            <Text style={styles.sign} onPress={handleSign}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontWeight: "bold",
    height: 40,
    width: 200,
    margin: 10,
    borderBottomWidth: 2,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    borderColor: "white",
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
    padding: 10,
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
  containerDropDown: {
    fontSize: "bold",
  },
  dropdown: {
    height: 50,
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
