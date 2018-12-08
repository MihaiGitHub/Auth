import React, { Component } from 'react';
import { View } from 'react-native';
// Should import firebase above all components
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            authDomain: 'authentication-85832.firebaseapp.com',
            databaseURL: 'https://authentication-85832.firebaseio.com',
            projectId: 'authentication-85832',
            storageBucket: 'authentication-85832.appspot.com',
            messagingSenderId: '479477847189'
        });

        // Function will be called everytime user signs in or out
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;