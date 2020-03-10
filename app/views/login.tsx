import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
interface Props {
    navigation: any;
}
interface State {
    isClicked: any;
}
export class LoginPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isClicked: false };
    }
    render() {
        return (
            <View>
                <Text></Text>
                <View>
                    <Button
                        color={this.state.isClicked ? 'red' : 'blue'}
                        onPress={this.login} title={'LOGIN'}></Button>
                </View>
            </View>
        );
    }
    login = () => {
        this.setState({isClicked: true});
        this.props.navigation.navigate('MainPage');
    }
}
const styles = StyleSheet.create({
    loginBeforeClick: {
        backgroundColor: 'red',
        color: 'red',
    },
    loginAfterClick: {
        backgroundColor: 'blue',
    }
});
