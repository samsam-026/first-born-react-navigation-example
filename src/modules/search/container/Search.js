import React, { Component } from 'react';
import { View } from 'react-native';
import defaultStyles from '../../../shared/style/styles';
import { Text } from "@99xt/first-born";
import NavigationHeader from '../../../navigation/NavigationHeader';
import NavigationService from '../../../navigation/NavigationService';

class Search extends Component {

    static navigationOptions = ({ navigation }) => {
        return { header: <NavigationHeader title="Search" onLeft={() => NavigationService.goBack()} typeLeft="back" /> }
    }

    render() {
        return (
            <View style={defaultStyles.paddedCenterContainer}>
                <Text>Search</Text>
            </View>
        );
    }

}

export default Search;
