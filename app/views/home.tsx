import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class HomePage extends React.Component {
    render() {
        console.log('re rendered - HomePage');
        return(
            <View style= { {height: 3000}}>
                <Text>Here is home component</Text>
            </View>
        );
    }
}
