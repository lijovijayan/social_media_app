import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';
import { theme } from '../conf';
interface Props {
}
interface State {
}
export class CardFooter extends React.Component<Props, State> {
    render() {
        console.log('re rendered - card footer');
        return (
            <View style={style.row}>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'heart-outline'} />
                </View>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'comment-outline'} />
                </View>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'share-outline'} />
                </View>
            </View >);
    }
}

const style = StyleSheet.create(
    {
        row: {
            flexDirection: "row",
            bottom: 0,
            position: "absolute",
            backgroundColor: theme.primaryColor,
        },
        iconContainer: {
            flex: 1,
            alignSelf: "stretch",
            height: 50,
            backgroundColor: theme.primaryColor,
            alignItems: "center",
            justifyContent: "center",
        }
    }
);