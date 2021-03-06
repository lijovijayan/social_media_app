import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../conf';
import { GridView } from '../sections/grid_view';
interface Props {
    navigation: any;
}
export class SearchPage extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    searchInputValue: string = '';
    render() {
        console.log('re rendered - SearchPage');
        return (

            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                overScrollMode={"always"}
                style={{
                    backgroundColor: 'white',
                }}>
                <View style={[styles.column]}>
                    <View style={styles.searchBar} >
                        <View style={styles.row}>
                            <View style={{ width: "10%", marginLeft: 5 }}>
                                <View style={styles.searchIconContainer}>
                                    <FontAwesome5 size={18} style={styles.searchIcon} name={'search'} solid />
                                </View>
                            </View>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={text => (text: string) => { console.log(text) }}
                                placeholder='search here'
                            // value={this.searchInputValue}
                            />
                        </View>
                    </View>
                    <GridView randomImages={true} numberOfImages={200}></GridView>
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
        backgroundColor: "#FFFFFFFF"
    },
    searchBar: {
        width: "94%",
        flex: 1,
        marginTop: 15,
        height: 50,
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
    }, searchIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.primaryColor,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignSelf: "flex-start",
    },
    searchIcon: {
        color: "white",
    },
    searchInput: {
        height: 40,
        borderBottomWidth: 0,
        borderColor: theme.primaryColor,
        width: "80%",
        marginLeft: 15
    }
});
