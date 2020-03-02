import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface State {
    username: any;
}
interface Props {
    navigation: any;
    username: any;
}
export class NotificationPage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
        }
    }
    componentDidMount() {
        this.state = {
            username: this.props.username,
        }
    }
    toggleText = () => {
        console.log('clicked');
        this.setState((state: State) => {
            return { username: state.username === '' ? 'lijo' : '' }
        });
    }
    render() {
        console.log('on render function - notification component')
        return (
            <View>
                <Text>Here is Notification component</Text>
                <Text onPress={this.toggleText}>{this.state.username}</Text>
            </View>
        );
    }
}
