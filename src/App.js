import React, { Component } from 'react';
import { View } from 'react-native';
// Should import firebase above all components
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // Don't know if user logged in; to show spinner
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return <Button>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;