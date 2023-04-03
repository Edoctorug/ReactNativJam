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
  Alert,
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

function Create() {
  //useStates below are for managing/handling change in the values of variables forexample 'fname' changed with the function 'setFname'. They keep refreshing under the hood once the function is called.
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setPassword2] = React.useState("");
  const [pharmlicence, setPharmlicence] = React.useState(null);
  const [operationLicence, setOperationLicence] = React.useState(null);

  // function to be called when the Pharmaceautical Licence button is clicked. It then waits the document details to store them in variable 'PharmaceauticalLicence1' which is later used to change state of 'pharmlicence'
  const _pickPhamaLiecence = async () => {
    let PharmaceauticalLicence1 = await DocumentPicker.getDocumentAsync({});
    setPharmlicence(PharmaceauticalLicence1);
  };

  // function to be called when the Operating Licence button is clicked. It then waits the document details to store them in variable 'OperatingLicence' which is later used to change state of 'operationLicence'
  const _pickOperationLiecence = async () => {
    let OperatingLicence = await DocumentPicker.getDocumentAsync({});
    setOperationLicence(OperatingLicence);
  };

  //these handle country code assignments.
  const [value, setValue] = React.useState(null);
  const [number, setNumber] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);

  const [valuecountry, setValuecountry] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  //We use formData to pass it to our InsertData() function in the content-type since we want to include some form data [pdfs]
  const formData = new FormData();
  formData.append("firstname", fname);
  formData.append("lastname", lname);
  formData.append("email", email);
  formData.append("password1", password);
  formData.append("role", value);
  formData.append("password2", cpassword);
  formData.append("phonenumber", number);

  //check if the licences are really attached before sending them to backend, we wouldn't like to send invalid files. What to be done incase of invalid values can be done later with developments.
  if (pharmlicence != null) {
    formData.append("pharmaceaticallicence", {
      uri: pharmlicence.uri,
      name: pharmlicence.name,
      type: "application/pdf",
    });
  }
  if (operationLicence != null) {
    formData.append("operatinglicence", {
      uri: operationLicence.uri,
      name: operationLicence.name,
      type: "application/pdf",
    });
  }

  const InsertData = () => {
    fetch("http://192.168.248.1:900/signup/accounts/", {
      //used an ip address which is not localhost because localhost was conflicting with the android simulator...No conflicts surface wgen testing on ios emulators.
      method: "POST", //point to our url of the api with a get method (to get the accounts)
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((resp) => resp.json()) //receive response then convert it to json. Since it returns a promise.
      .then((data) => {
        // console.log(data); //uncomment this line to see the data returned in the response.
        alert("Account Registered Successfully.");
      })
      .catch((error) => Alert.alert("Error", error)); //Catch the error and display it.
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: "#5CC5FF",
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#5CC5FF",
          }}
          // source={require("../app/assets/edocbg.jpg")}
          // resizeMode="cover"
        >
          <View style={styles.container}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                fontSize: 40,
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
              onChangeText={(fname) => setFname(fname)}
              value={fname}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={setLname}
              value={lname}
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
              onChangeText={setEmail}
              value={email}
              placeholder="Email Adress"
            />
            <View
              style={{
                margin: 0,
                // borderBottomWidth: 2,
                // borderLeftWidth: 1,
                // borderRightWidth: 1,
                borderColor: "white",
                height: 50,
                width: 300,
                margin: 0,
                borderRadius: 50,

                // borderBottomLeftRadius: 6,
                // borderBottomRightRadius: 60,
              }}
            >
              <PhoneInput
                // style={styles.phone}
                containerStyle={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  width: 300,
                }}
                flagButtonStyle={{
                  // width: 45,
                  marginLeft: 8,
                }}
                textContainerStyle={{
                  backgroundColor: "white",
                  fontWeight: "normal",
                  borderRadius: 50,
                }}
                useRef={phoneInput}
                defaultValue={valuecountry}
                defaultCode="UG"
                layout="first"
                placeholder="700000000"
                onChangeText={(text) => {
                  setNumber(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
              />
            </View>

            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="oneTimeCode"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword2}
              value={cpassword}
              placeholder="Re-Enter Password"
              secureTextEntry={true}
              textContentType="oneTimeCode"
            />
            <TouchableOpacity>
              <Text style={styles.sign} onPress={InsertData}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create;

const styles = StyleSheet.create({
  input: {
    fontWeight: "bold",
    height: 50,
    width: 300,
    margin: 8,
    // borderBottomWidth: 2,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderColor: "white",
    padding: 11,
    borderRadius: 50,
    backgroundColor: "white",

    // borderBottomLeftRadius: 6,
    // borderBottomRightRadius: 60,
  },
  attachment: {
    fontWeight: "bold",
    height: 50,
    width: 300,
    margin: 3,
    // borderBottomWidth: 2,
    // borderLeftWidth: 0.5,
    // borderRightWidth: 0.5,
    // borderTopWidth: 0.5,
    // borderColor: "white",
    padding: 11,
    borderRadius: 50,
    backgroundColor: "white",
    // borderBottomLeftRadius: 6,
    // borderBottomRightRadius: 60,
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
    fontWeight: "normal",
    fontSize: 17,
    color: "black",
    backgroundColor: "#A1ECCB",
    // display:"flex",
    textAlign: "center",
    // justifyContent: "center",
    textAlignVertical: "center",
    height: 50,
    width: 300,
    margin: 0,
    padding: 0,

    borderRadius: 50,
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
    borderColor: "#000",
    marginBottom: 10,
    color: "#000",
  },
});
