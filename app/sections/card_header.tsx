import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { names } from '../assets/usernames';
import { theme } from '../conf';
interface Props {
}
interface State {
}
export class CardHeader extends React.Component<Props, State> {
    render() {
        console.log('re rendered - card header');
        return (
            <View style={style.row}>
                <View style={style.headerIcon}>
                    <Image style={style.headerIconImage}
                        source={{ uri: `https://picsum.photos/${Math.floor(Math.random() * Math.floor(300) + 100)}/30` }}
                    />
                </View>
                <View style={style.headerContainer}>
                    <Text>{getUsername()}</Text>
                </View>
            </View >);
    }
}
function getUsername(): string {
    const username =  names;
    return (username[Math.floor((Math.random() * 1000))] + ' ' + username[Math.floor(Math.random() * 1000)]);
}
const style = StyleSheet.create(
    {
        row: {
            flexDirection: "row",
            top: 0,
            backgroundColor: "white",
            height: 50,
        },
        headerIcon: {
            height: 35,
            width: 35,
            margin: 7.5,
            borderRadius: 17.5,
            backgroundColor: theme.primaryColor,
            padding: 2.5,
        },
        headerContainer: {
            flex: 1,
            alignSelf: "stretch",
            height: 50,
            backgroundColor: "white",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: 5,
        },
        headerIconImage: {
            height: 30,
            width: 30,
            borderRadius: 15,
        }
    }
);