import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { ProfilePage } from './profile';
import { BottomNavBar } from '../sections/custom_components/bottom_nav_bar';
import { HomePage } from './home';
interface State {
    activeIndex: number;
}
interface Props {
}
export class MainPage extends React.Component<Props, State> {
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
                    {this.renderChild(this.state.activeIndex)}
                </ScrollView>
                <BottomNavBar activeTab={this.state.activeIndex} switchTabs={this.switchTabs} />
            </View>
        );
    }
    switchTabs = (index: number) => {
        this.setState((state: State) => {
            return { activeIndex: index }
        });
    }
    renderChild(index: number) {
        switch (index) {
            case 0:
                return <HomePage />
            case 1:
                return <ProfilePage username={'lijo'} />
            default:
                break;
        }
    }
}