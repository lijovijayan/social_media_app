import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../conf';
interface State {
    username: any;
}
interface Props {
    navigation: any;
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
    render() {
        console.log('on render function - profile component')
        return (
            <ScrollView style={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={styles.column}>
                    <View style={styles.profileContainer}>
                        <View style={styles.propicContainter}>
                            <Image style={styles.profilePic} source={{ uri: `https://picsum.photos/id/1011/500` }}></Image>
                        </View>
                        <Text style={styles.username}>
                            Morgan Stark
                        </Text>
                        <View style={styles.bioContainer}>
                            <Text style={styles.bio}>
                                tes hdwb kascakcu wudhhwe uiqd qiwuwihi quwhq uiqhxiwh qiuhihx uqhhquhuq iq
                            </Text>
                        </View>
                        <View style={[styles.row, styles.contentRow]}>
                            <View style={[{ flex: 1 }]}>
                                <View style={styles.column}>
                                    <Text style={styles.contextHeader}>
                                        Photos
                                </Text>
                                    <Text style={styles.contentValue}>
                                        68
                                </Text>
                                </View>
                            </View>
                            <View style={[{ flex: 1 }]}>
                                <View style={styles.column}>
                                    <Text style={styles.contextHeader}>
                                        Followers
                                </Text>
                                    <Text style={styles.contentValue}>
                                        789
                                </Text>
                                </View>
                            </View>
                            <View style={[{ flex: 1 }]}>
                                <View style={styles.column}>
                                    <Text style={styles.contextHeader}>
                                        Following
                                </Text>
                                    <Text style={styles.contentValue}>
                                        567
                                </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.gridContainer}>
                    <View style={styles.gridChild}>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    gridChild: {
        width: (Dimensions.get('window').width / 3),
        height: (Dimensions.get('window').width / 3),
        backgroundColor: "red",
        margin: 2,
        padding: 5,
    },
    scrollView: {
        backgroundColor: "white",
    },
    row: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 10,
        paddingTop: 10,
    },
    column: {
        flexDirection: "column",
        flex: 1,
        alignSelf: "stretch",
        paddingBottom: 10,
    },
    profileContainer: {
        width: "100%",
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowColor: "black",
        elevation: 2,
    },
    propicContainter: {
        paddingBottom: 15,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: theme.primaryColor,
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    bioContainer: {
        padding: 40,
        paddingTop: 10,
    },
    bio: {
        color: "#9eb3d9",
        textAlign: "center",
        lineHeight: 20,
    },
    contentRow: {
        paddingBottom: 20,
    },
    contextHeader: {
        fontSize: 16,
        color: "#9eb3d9",
        textAlign: "center",
    },
    contentValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    }
});