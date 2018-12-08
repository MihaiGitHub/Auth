import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    // Value of email input always comes from the state which is updated onChangeText
    state = {
        email: '',
        password: ''
    };

    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                // Create account if user does not have one; does not authenticate
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        // If user fails authentication we will have new state term; error
                        this.setState({ error: 'Authentication Failed.' })
                    })
            })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />{ /* email: email */ }
                </CardSection>
                
                <CardSection>
                    { /* password argument is the text the user entered */ }
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </CardSection>

                { /* Will show error if there is one */ }
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;