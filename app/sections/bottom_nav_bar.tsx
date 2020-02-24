import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
interface Tab {
    child: any;
    style: {};
};
interface Props {
    switchTabs: (parameter: number) => void;
}
export class BottomNavBar extends React.Component<Props> {
    // BottomNavBar methods
    callback: any;

    // BottomNavBar properties
    //

    constructor(props: any) {
        super(props);
        this.callback = this.props.switchTabs;
    }
    render() {
        console.log('re rendered - bottomNavBar');
        return (
            <View style={style.bottomNavBar}>
                {this.tabs.map((tab, i: number) =>
                    <TouchableNativeFeedback key={i} onPress={(event) => this.callback(i)}>
                        <View style={style.tab} key={i}>
                            {tab.child}
                        </View>
                    </TouchableNativeFeedback>
                )
                }
            </View >);
    }


    tabs: Tab[] = [
        {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Icon
                    name="home"
                    color="#3b5998"
                    size={25}
                />,
        }, {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Icon
                    name="search1"
                    color="#3b5998"
                    size={25}
                />
        }
        , {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Icon
                    name="profile"
                    color="#3b5998"
                    size={25}
                />,
        }, {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Icon
                    name="user"
                    color="#3b5998"
                    size={25}
                />,
        },
    ];
}

const style = StyleSheet.create(
    {
        bottomNavBar: {
            alignSelf: "stretch",
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
        },
        tab: {
            borderTopColor: "#cccccc",
            borderTopWidth: 1,
            height: 55,
            alignSelf: "stretch",
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
        }
    }
);