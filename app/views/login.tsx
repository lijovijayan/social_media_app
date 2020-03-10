import React from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Animated, Easing, ScrollView, TextInput } from 'react-native';
import { ASSETS } from '../assets/index';
import { theme } from '../conf';
interface Props {
    navigation: any;
}
interface State {
    isClicked: any;
}
export class LoginPage extends React.Component<Props, State> {
    spinValue: Animated.Value;
    constructor(props: Props) {
        super(props);
        this.state = { isClicked: false };
        this.spinValue = new Animated.Value(0);
        this._spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
    }
    _spin: any;
    render() {
        return (
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                overScrollMode={"always"}
                style={{
                    backgroundColor: 'white',
                }}>
                <View style={[styles.column, {paddingBottom: 20, paddingTop: 20}]}>

                    {/* <TouchableWithoutFeedback onPress={this.login}>
                        <View style={this.state.isClicked ? styles.loginAfterClick : styles.loginBeforeClick}>
                            {this.state.isClicked ?
                                <Animated.Image
                                    style={[styles.animateIcon, { transform: [{ rotate: this._spin }] }]}
                                    source={ASSETS.loading_blue}
                                /> :
                                <Text style={{}}>LOGIN</Text>
                            }
                        </View>
                    </TouchableWithoutFeedback> */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={text => (text: string) => { console.log(text) }}
                            placeholder='username'
                        // value={this.searchInputValue}
                        />
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.searchInput}
                            onChangeText={text => (text: string) => { console.log(text) }}
                            placeholder='password'
                        // value={this.searchInputValue}
                        />
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={styles.buttonsContainer}>

                        <TouchableWithoutFeedback onPress={this.login}>
                            <View style={styles.button}>
                                <Text>Forgot Password</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ width: 20 }}></View>

                        <TouchableWithoutFeedback onPress={this.login}>
                            <View style={styles.button}>
                                <Text>Login</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        );
    }
    async spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    login = () => {
        this.spin();
        this.setState({ isClicked: true });
        setTimeout(() => this.props.navigation.navigate('MainPage'), 100);
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
        backgroundColor: "#FFFFFFFF"
    },
    inputContainer: {
        height: 50,
        width: "70%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        shadowColor: "black",
        elevation: 2,
        backgroundColor: "white",
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchInput: {
        height: "100%",
        borderBottomWidth: 0,
        borderColor: theme.primaryColor,
        width: "100%",
    },
    loginBeforeClick: {
        backgroundColor: theme.primaryColor,
        height: 100,
        width: 100,
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    loginAfterClick: {
        backgroundColor: theme.primaryColor,
        height: 100,
        width: 100,
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    animateIcon: {
        width: 50,
        height: 50,
    },
    buttonsContainer: {
        width: "70%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    button: {
        height: 50,
        backgroundColor: "red",
        flex: 1,
    }
});
