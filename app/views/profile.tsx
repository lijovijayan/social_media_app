import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface State {
    username: any;
}
interface Props {
    username: any;
}
export class ProfilePage extends React.Component<Props, State> {
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
        this.setState((state: State) => {
            return { username: state.username === '' ? 'lijo' : '' }
        });
    }
    render() {
        console.log('on render function')
        return (
            <View>
                <Text>Here is Profile component</Text>
                <Text onPress={this.toggleText}> YO YO {this.state.username}</Text>
            </View>
        );
    }
}
