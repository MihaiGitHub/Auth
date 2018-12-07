import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    // Value of text input always comes from the state which is updated onChangeText
    state = {
        text: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        style={{ height: 20, width: 100 }}
                        onChangeText={text => this.setState({ text })} />{ /* text: text */ }
                </CardSection>
                <CardSection />

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