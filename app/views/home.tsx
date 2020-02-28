import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <View style={[styles.column]}>
                    <ScrollView style={styles.statusBar} horizontal={true}
                        showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={[styles.statusIconContainer, { backgroundColor: "white" }]}>
                            <View style={styles.addIconContainer}>
                                <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'plus'} />
                            </View>
                        </View>
                        {this.renderImages()}
                    </ScrollView>
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
    renderImages() {
        let images = [];
        for (let i = 0; i < 20; i++) {
            images.push(<View
                key={i}
                style={styles.statusIconContainer}>
                <Image
                    key={i}
                    style={styles.statusIcon}
                    source={{ uri: `https://picsum.photos/${Math.floor(Math.random() * Math.floor(300) + 1000)}/50` }}
                />
            </View>);
        }
        return images;
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
    statusBar: {
        width: "94%",
        height: 80,
        marginTop: 15,
    },
    text: {
        textAlign: "center",
    },
    statusIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "white",
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "black",
        elevation: 4,
        borderWidth: 1,
        borderColor: "#3c8ab8",
        padding: 2,
        overflow: "hidden",
    },
    statusIcon: {
        width: "100%",
        height: "100%",
        borderRadius: 35,
    },
    addIconContainer: {
        backgroundColor: "#3c8ab8",
        width: "100%",
        height: "100%",
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
    }
});