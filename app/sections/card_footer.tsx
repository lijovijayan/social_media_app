import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';
import { theme } from '../conf';
interface Props {
}
interface State {
    like: boolean,
}
export class CardFooter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            like: false,
        }
    }
    render() {
        console.log('re rendered - card footer');
        return (
            <View style={style.row}>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons
                        style={{ color: this.state.like ? 'red' : 'white' }} size={25}
                        name={this.state.like ? 'cards-heart' : 'heart-outline'}
                        onPress={() => {
                            this.setState((state: State, prevState: State) => {
                                return { like: !state.like }
                            })
                        }} />
                </View>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'comment-outline'} />
                </View>
                <View style={style.iconContainer}>
                    <MaterialCommunityIcons style={{ color: "white" }} size={25} name={'share-outline'} />
                </View>
            </View >);
    }
}

const style = StyleSheet.create(
    {
        row: {
            flexDirection: "row",
            bottom: 0,
            position: "absolute",
            backgroundColor: theme.primaryColor,
        },
        iconContainer: {
            flex: 1,
            alignSelf: "stretch",
            height: 50,
            backgroundColor: theme.primaryColor,
            alignItems: "center",
            justifyContent: "center",
        }
    }
);