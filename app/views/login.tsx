import React from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Animated, Easing, ScrollView, TextInput, Image } from 'react-native';
import { ASSETS } from '../assets/index';
import { theme } from '../conf';
interface Props {
    navigation: any;
}
interface State {
    isClicked: any;
    username: string,
    password: string,
}
export class LoginPage extends React.Component<Props, State> {
    spinValue: Animated.Value;
    constructor(props: Props) {
        super(props);
        this.state = {
            isClicked: false,
            username: '',
            password: ''
        };
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
                <View style={[styles.column, { paddingBottom: 20, paddingTop: 50 }]}>

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
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={ASSETS.logo}></Image>
                    </View>
                    <View style={{ height: 5 }}></View>
                    <View style={styles.quoteContainer}>
                        <Text style={styles.quote}>Where your moments reflects</Text>
                    </View>
                    <View style={{ height: 50 }}></View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={(text: string) => { this.setState({ username: text }) }}
                            placeholder='username'
                        // value={this.searchInputValue}
                        />
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.searchInput}
                            onChangeText={(text: string) => { this.setState({ password: text }) }}
                            placeholder='password'
                        // value={this.searchInputValue}
                        />
                    </View>
                    <View style={{ height: 30 }}></View>
                    <View style={styles.buttonsContainer}>

                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Forgot Password</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ width: 10 }}></View>

                        <TouchableWithoutFeedback onPress={this.login}>
                            <View style={styles.button}>
                                {this.state.isClicked ?
                                    <Animated.Image
                                        style={[styles.animateIcon, { transform: [{ rotate: this._spin }] }]}
                                        source={ASSETS.loading_plain}
                                    /> :
                                    <Text style={styles.buttonText}>LOGIN</Text>
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ height: 15 }}></View>
                    <Text style={styles.bottomMsg}>Don't have an account? &nbsp;<Text style={styles.signup}> Sign Up Now </Text></Text>
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
        setTimeout(() => {
            if(this.state.username === 'user' && this.state.password === 'password') {
                    this.props.navigation.replace('MainPage');
            } else {
                this.setState({ isClicked: false });
            }
        }, 1500);
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
        shadowColor: theme.primaryColor,
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
        width: 40,
        height: 40,
    },
    buttonsContainer: {
        width: "70%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    logoContainer: {
        flexDirection: "column",
        flex: 1,
        height: 200,
        width: 200,
        borderRadius: 110,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.primaryColor,
        borderWidth: 5,
    }
    , logo: {
        width: 150,
        height: 150,
    }, quoteContainer: {

    },
    quote: {
        color: theme.primaryColor,
        fontSize: 16,
        fontWeight: "900",
        fontFamily: "sans-serif-light",
        // fontStyle: "italic",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    button: {
        height: 50,
        backgroundColor: theme.primaryColor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    bottomMsg: {
        color: theme.primaryColor,
    },
    signup: {
        color: theme.primaryColor,
        fontWeight: "bold",
        textDecorationLine: 'underline',
    }
});
