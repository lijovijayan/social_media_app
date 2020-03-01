import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
                    <Image
                        source={{ uri: `https://picsum.photos/${Math.floor(Math.random() * Math.floor(300) + 100)}/20` }}
                    />
                </View>
                <View style={style.headerContainer}>
                </View>
            </View >);
    }
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
            backgroundColor: "#3c8ab8",
            padding: 2,
        },
        headerContainer: {
            flex: 1,
            alignSelf: "stretch",
            height: 50,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
        }
    }
);