import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    // Value of email input always comes from the state which is updated onChangeText
    state = {
        email: '',
        password: ''
    };

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

                <CardSection>
                    <Button onPress={() => console.log('eurekae')}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;