import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import Home from './Screens/Home';
import Create from "./Screens/Create";

export default function App() {
  return(
    // <View style={styles.container}>
      <Create/>

    //   {/* {<StatusBar style="auto"  />} */}
    // </View>
    
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // textAlign: 'center',
    // justifyContent: 'center'
  },


});