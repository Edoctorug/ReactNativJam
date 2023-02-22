import React, { useCallback, useState, useRef } from "react";

import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";

import { Dropdown } from "react-native-element-dropdown";
import * as DocumentPicker from "expo-document-picker";

import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";

const data = [
  { label: "Patient", value: "patient" },
  { label: "Pharmacy", value: "pharmacy" },
  { label: "Doctor", value: "doctor" },
  { label: "Hospital", value: "hospital" },
  { label: "Clinic", value: "clinic" },
];

export default function App() {
  const [fname, onChangeFname] = React.useState("First Name");
  const [lname, onChangeLname] = React.useState("Second Name");
  const [email, onChangeEmail] = React.useState("Email");
  const [phone, onChangePhone] = React.useState("Phone Number");
  const [password, onChangePassword] = React.useState("Password");
  const [cpassword, onChangeCpassword] = React.useState("Password");

  const handleSign = () => alert("Registered!");

  const _pickPhamaLiecence = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };

  const _pickOperationLiecence = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };

  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);

  const [valuecountry, setValuecountry] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: "#0055C1",
        flex: 1,
      }}
    >
      <ScrollView>
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
              // value={fname}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeLname}
              // value={lname}
              placeholder="Last Name"
            />

            <View style={styles.containerDropDown}>
              <Dropdown
                style={[styles.attachment, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select Role" : "..."}
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
            {(value === "clinic" ||
              value === "pharmacy" ||
              value === "hospital" ||
              value === "hospital") && (
              <>
                <TouchableOpacity onPress={_pickPhamaLiecence}>
                  <Text style={[styles.attachment]}>
                    Pharmaceautical licence...
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_pickOperationLiecence}>
                  <Text style={[styles.attachment]}>Operating licence...</Text>
                </TouchableOpacity>
              </>
            )}
            <TextInput
              style={[styles.input]}
              onChangeText={onChangeEmail}
              // value={email}
              placeholder="Email Adress"
            />
            <View style={{
              margin: 8,
              borderBottomWidth: 2,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "white",
    
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 60,
              
            }}>
              <PhoneInput
                // style={styles.phone}
                containerStyle ={{
                  width: 200,
                  backgroundColor: null,

                  
                }}
                flagButtonStyle={{
                  width: 45,
                  

                }}
                textContainerStyle={{
                  backgroundColor: null,
                  fontWeight: "bold",

                }}
                useRef={phoneInput}
                defaultValue={valuecountry}
                defaultCode="UG"
                layout="first"
                placeholder="700000000"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
              
                
              />
            </View>
            
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              // value={password}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="oneTimeCode"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeCpassword}
              // value={cpassword}
              placeholder="Re-Enter Password"
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontWeight: "bold",
    height: 40,
    width: 200,
    margin: 8,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white",
    padding: 11,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 60,
  },
  attachment: {
    fontWeight: "bold",
    height: 40,
    width: 200,
    margin: 3,
    borderBottomWidth: 2,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "white",
    padding: 11,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 60,
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
    fontWeight: "bold",
  },
  placeholderStyle: {
    fontWeight: "bold",
  },
  selectedTextStyle: {
    fontWeight: "500",
  },
  iconStyle: {
    width: 13,
    height: 14,
    backgroundColor: "white",
  },
  inputSearchStyle: {
    height: 40,
    fontWeight: "bold",
  },
  phone: {
    padding: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    color: '#000'
},
});
