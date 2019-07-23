import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from "@99xt/first-born";
import NavigationHeader from "../../../navigation/NavigationHeader";
import NavigationService from '../../../navigation/NavigationService';

class About extends Component {

    static navigationOptions = ({ navigation }) => {
        return { header: <NavigationHeader title="About" onLeft={() => NavigationService.goBack()} typeLeft="back" /> }
    }

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>About</Text>
            </View>
        );
    }

}

export default About;
