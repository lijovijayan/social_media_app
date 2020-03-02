import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Notifcation } from '../sections/notification_cont';
import { notifications } from '../assets/notifications';

interface State {
}
interface Props {
}
export class NotificationPage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log('on render function - notification component')
        return (
            <ScrollView style={{ backgroundColor: "white" }}>
                {renderMessages()}
            </ScrollView>
        );
    }
}
function renderMessages() {
    let notificationList: JSX.Element[] = [];
    notifications.forEach((notification, i) => {
        notificationList.push(
            <Notifcation key={i} username={notification.username} subject={notification.subject}></Notifcation>
        )
    });
    return notificationList;
}