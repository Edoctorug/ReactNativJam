import { Button, StyleSheet, Text, TextInput,
	View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
const [message, setMessage] = useState('');
const navigation = useNavigation();
const goToMessageScreen = () => {
	navigation.navigate('Message', {
	message,
	});
};

return (
	<View style={styles.container}>
	<Text style={styles.title}>GeeksforGeeks</Text>
	<TextInput
		placeholder="Enter your message here"
		value={message}
		onChangeText={(text) => setMessage(text)}
		style={styles.input}
	/>
	<Button title="Submit"
		onPress={goToMessageScreen} color="green" />
	</View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
},
title: {
	fontSize: 40,
	fontWeight: 'bold',
	color: 'green',
	marginTop: 50,
},
input: {
	width: '75%',
	padding: 10,
	marginTop: 20,
	color: '#000',
},
});
