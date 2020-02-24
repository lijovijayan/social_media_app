import React from 'react';
import { View, ScrollView } from 'react-native';
import { ProfilePage } from './profile';
import { BottomNavBar } from '../sections/bottom_nav_bar';
import { HomePage } from './home';
interface State {
    activeIndex: number;
}
interface Props {
}
export class MainPage extends React.Component< Props ,State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }
    render() {
        console.log('re rendered - MainPage');
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignSelf: "stretch" }}>
                <ScrollView>
                    <ProfilePage username='myName' />
                    <HomePage />
                </ScrollView>
                {/* fix error */}
                <BottomNavBar activeTab={this.state.activeIndex} switchTabs={this.switchTabs} />
            </View>
        );
    }
    switchTabs(index: number) {
        this.setState({activeIndex: index});
    }
}
