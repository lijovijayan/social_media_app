import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardFooter } from '../sections/card_footer';
import { CardHeader } from '../sections/card_header';
import { theme } from '../conf';

interface Props {
    navigation: any;
    name: string;
}
interface State {
    navigation?: any;
    name?: string;
}
export class HomePage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: this.props.name,
            navigation: this.props.navigation,
        };
        this.initialID = Math.floor(Math.random() * Math.floor(300) + 1000);
    }
    initialID: number;
    images = 100;
    changeData() {
        this.state = { navigation: ' ', name: '' }
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
                    {this.renderCards(this.initialID)}
                </View>
            </ScrollView>
        );
    }
    renderCards(initialID: number) {
        let cards = [];
        this.images = this.images + 2;
        for (let i: any = 0; i < this.images; i++) {
            cards.push(
                <View key={'card-parent' + i} style={styles.card}>
                    <CardHeader key={'card-header' + i}></CardHeader>
                    <Image
                        key={i}
                        style={[styles.cardIcon]}
                        source={{ uri: `https://picsum.photos/${i + initialID}/500` }}
                    />
                    <CardFooter key={'card-footer' + i}></CardFooter>
                </View>);
        }
        return cards;
    }
    renderImages() {
        let images = [];
        for (let i = 0; i < 20; i++) {
            images.push(
                <View
                    key={i}
                    style={styles.statusIconContainer}>
                    <Image
                        key={i}
                        style={[styles.statusIcon, {backgroundColor: "red"}]}
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
        alignSelf: "stretch",
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
        borderRadius: 10,
        width: "94%",
        height: 420,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        shadowColor: "black",
        elevation: 5,
        backgroundColor: "white",
        overflow: "hidden",
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
        borderColor: theme.primaryColor,
        padding: 2,
        overflow: "hidden",
    },
    statusIcon: {
        width: "100%",
        height: "100%",
        borderRadius: 35,
    },
    addIconContainer: {
        backgroundColor: theme.primaryColor,
        width: "100%",
        height: "100%",
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
    },
    cardIcon: {
        width: "100%",
        height: "100%",
    }
});