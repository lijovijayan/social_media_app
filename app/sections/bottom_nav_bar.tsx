import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text } from 'react-native';
interface Tab {
    child: any;
    style: {};
};
export class BottomNavBar extends React.Component {
    tabs: Tab[] = [
        {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Text style={{ color: "red" }}>
                    Nav 1
            </Text>,
        }, {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Icon
                    name="facebook"
                    color="#3b5998"
                    size={30}
                />
        }
        , {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Text style={{ color: "red" }}>
                    Nav 3
            </Text>,
        }, {
            style: {
                backgroundColor: "yellow",
            },
            child:
                <Text style={{ color: "red" }}>
                    Nav 4
            </Text>,
        },
    ];
    render() {
        return (
            <View style={style.bottomNavBar}>
                {this.tabs.map((tab, i) =>
                    <View style={style.tab} key={i}>
                        {tab.child}
                    </View>
                )
                }
            </View >);
    }
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
            height: 50,
            alignSelf: "stretch",
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
        }
    }
);