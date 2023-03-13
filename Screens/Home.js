import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.248.1:900/signup/accounts/", { //used an ip address which is not localhost because localhost was conflicting with the android simulator...No conflicts surface wgen testing on ios emulators. 
       method: "GET" //point to our url of the api with a get method (to get the accounts)
      })
      .then(resp => resp.json()) //receive response then convert it to json. Since it returns a promise.
      .then(data => {
        setData(data)
      })
      .catch(error => Alert.alert("Error", error)) //Catch the error and display it.
    
  }, []);
 
  const renderData = (item) => {
    return (
      <Card style={styles.waya}>
        <Text style={{ fontSize: 25 }}>{item.firstname} {item.lastname}</Text>
      </Card>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        keyExtractor={(item) => item.id}
      />

      <FAB
        style={styles.fab}
        icon="camera"
        onPress={() => console.log("Jamil")}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  waya: {
    padding: 20,
    backgroundColor: "yellow",
    marginTop: 20,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "red",
  },
});
