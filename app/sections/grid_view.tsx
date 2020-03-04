import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
interface Props {
    randomImages?: boolean,
    numberOfImages?: number,
}
export class GridView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        console.log('rendered - grid component');
        return (
            <View style={styles.gridContainer}>
                {this.renderGrid()}
            </View>)
    }
    renderGrid() {
        let gridImages = [];
        for (let i = 0; i < (this.props.numberOfImages ? this.props.numberOfImages : 100); i++) {
            gridImages.push(
                <View key={i} style={styles.gridChild}>
                    <Image
                        key={i}
                        style={[styles.gridImage]}
                        source={{
                            uri: `https://picsum.photos/${this.props.randomImages ?
                             Math.floor(Math.random() * Math.floor(500)) : (i + 1000)}/500`
                        }}
                    />
                </View>
            );
        }
        return gridImages;
    }
}
const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
    },
    gridChild: {
        width: (Dimensions.get('window').width / 3) - 3.35,
        height: (Dimensions.get('window').width / 3) - 3.35,
        padding: 5,
    },
    gridImage: {
        width: "100%",
        height: "100%",
        backgroundColor: "#c5d4db",
    },
});