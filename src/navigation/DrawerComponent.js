import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';

class DrawerComponent extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default DrawerComponent;