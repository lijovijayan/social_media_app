import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../conf';
import { CardView } from '../sections/card_view';

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
    }
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
                    <CardView randomImages={true} numberOfImages={50}></CardView>
                </View>
            </ScrollView>
        );
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
                        style={[styles.statusIcon, { backgroundColor: "red" }]}
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
    }
});