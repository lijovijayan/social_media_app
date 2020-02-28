import React from 'react';
import { TabNavigation } from '../routes';
export class MainPage extends React.Component {
    render() {
        console.log('re rendered - MainPage');
        return (
            <TabNavigation />
        );
    }
}