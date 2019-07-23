import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from '@99xt/first-born';
import NavigationService from '../../../navigation/NavigationService';
import NavigationHeader from '../../../navigation/NavigationHeader';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return { header: <NavigationHeader title="Home" onLeft={() => NavigationService.openDrawer()} typeLeft="drawer" /> };
    }

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>Home</Text>
            </View>
        );
    }

}

export default Home;
