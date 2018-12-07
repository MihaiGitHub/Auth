import React, { Component } from 'react';
import { View, Text } from 'react-native';
// Should import firebase above all components
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            authDomain: 'authentication-85832.firebaseapp.com',
            databaseURL: 'https://authentication-85832.firebaseio.com',
            projectId: 'authentication-85832',
            storageBucket: 'authentication-85832.appspot.com',
            messagingSenderId: '479477847189'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>My App</Text>
            </View>
        );
    }
}

export default App;