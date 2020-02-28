import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
interface Props {
    navigation: any;
}
export class HomePage extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    render() {
        console.log('re rendered - HomePage');
        return (
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                overScrollMode={"always"}
                style={{
                    backgroundColor: 'white',
                }}>
                <View style={ [styles.column]}>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                    <View style={styles.card} >
                        <Text style={styles.text}>Card</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch"
    },
    column: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "center",
        paddingBottom: 15,
    },
    card: {
        marginTop: 15,
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: "94%",
        height: 380,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        shadowColor: "black",
        elevation: 5,
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
    }
});