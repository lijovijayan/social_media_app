import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { CardHeader } from "./card_header";
import { CardFooter } from "./card_footer";
interface Props {
    randomImages?: boolean,
    numberOfImages?: number,
}
export class CardView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        console.log('rendered - grid component');
        return (this.renderCards(0));
    }
    renderCards(initialID: number) {
        let cards = [];
        this.props.numberOfImages;
        for (let i: any = 0; i < (this.props.numberOfImages ? this.props.numberOfImages : 100); i++) {
            cards.push(
                <View key={'card-parent' + i} style={styles.card}>
                    <CardHeader key={'card-header' + i}></CardHeader>
                    <Image
                        key={i}
                        style={[styles.cardIcon]}
                        source={{
                            uri: `https://picsum.photos/${this.props.randomImages ?
                                Math.floor(Math.random() * Math.floor(1000)) : (i + 100)}/500`
                        }}
                    />
                    <CardFooter key={'card-footer' + i}></CardFooter>
                </View>);
        }
        return cards;
    }
}
const styles = StyleSheet.create({
    cardIcon: {
        width: "100%",
        height: "100%",
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
});