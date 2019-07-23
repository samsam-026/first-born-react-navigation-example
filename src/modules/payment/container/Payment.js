import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from "@99xt/first-born";
import NavigationHeader from "../../../navigation/NavigationHeader";
import NavigationService from '../../../navigation/NavigationService';

class Payment extends Component {

    static navigationOptions = ({ navigation }) => {
        return { header: <NavigationHeader title="Payment" onLeft={() => NavigationService.openDrawer()} typeLeft="drawer" /> }
    }

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>Payment</Text>
            </View>
        );
    }

}

export default Payment;
