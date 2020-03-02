import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
interface Props {
    username: String,
    subject: String,
}
export class Notifcation extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        console.log('rendered - notification component');
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.userIcon}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: `https://picsum.photos/${Math.floor(Math.random() * Math.floor(300) + 1000)}/500` }}
                        />
                    </View>
                    <View style={styles.textField}>
                        <Text style={styles.notification}>
                            <Text style={styles.bold}>
                                {this.props.username}&nbsp;
                            </Text>
                            <Text>
                                {this.props.subject}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: `https://picsum.photos/${Math.floor(Math.random() * Math.floor(300) + 1000)}/500` }}
                        />
                    </View>
                </View>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        padding: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
    },
    userIcon: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    imageContainer: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 0,
    },
    image: {
        width: 50,
        height: 50,
    },
    textField: {
        flex: 1,
        alignItems: "flex-start",
    },
    notification: {
        textAlign: "left",
        fontSize: 16,
    },
    bold: {
        fontWeight: "bold",
    }
});