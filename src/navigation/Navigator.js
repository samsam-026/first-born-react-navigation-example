import React from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Home from "../modules/home/container/Home";
import Payment from "../modules/payment/container/Payment";
import About from "../modules/about/container/About";
import Settings from "../modules/settings/container/Settings";
import DrawerComponent from "./DrawerComponent";
import { TabBar, TabItem, Icon, Text } from "@99xt/first-born";
import Search from "../modules/search/container/Search";


const HomeStack = createStackNavigator({
    Home: Home,
}, {
        initialRouteName: "Home",
    });

const PaymentStack = createStackNavigator({
    Payment: Payment,
}, {
        initialRouteName: "Payment",
    });

const SettingsStack = createStackNavigator({
    Settings: Settings,
}, {
        initialRouteName: "Settings",
    });

const AboutStack = createStackNavigator({
    About: About,
}, {
        initialRouteName: "About",
    });

const SearchStack = createStackNavigator({
    Search: Search
}, {
        initialRouteName: "Search",
    });

const Tabs = createBottomTabNavigator({
    HomeStack: HomeStack,
    PaymentStack: PaymentStack,
    SettingsStack: SettingsStack,
}, {
        initialRouteName: "HomeStack",
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <TabBar color="#f8f8f8" activeColor="#0a60ff" inactiveColor="#8e8e93">
                    <TabItem onPress={() => props.navigation.navigate("HomeStack")} active={props.navigation.state.index === 0 ? true : false}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </TabItem>
                    <TabItem onPress={() => props.navigation.navigate("PaymentStack")} active={props.navigation.state.index === 1 ? true : false}>
                        <Icon name="card" />
                        <Text>Payments</Text>
                    </TabItem >
                    <TabItem onPress={() => props.navigation.navigate("SettingsStack")} active={props.navigation.state.index === 2 ? true : false}>
                        <Icon name="settings" />
                        <Text>Settings</Text>
                    </TabItem>
                </TabBar>
            );
        },
        navigationOptions: {
            header: null,
        }
    })

const Drawer = createDrawerNavigator({
    TabStack: {
        screen: Tabs,
        navigationOptions: () =>
            ({
                title: 'Home'
            })
    },
    AboutStack: {
        screen: AboutStack,
        navigationOptions: () =>
            ({
                title: 'About'
            })
    },
    SearchStack: {
        screen: SearchStack,
        navigationOptions: () =>
            ({
                title: 'Search'
            })
    }
}, {
        initialRouteName: "TabStack",
        drawerLockMode: "locked-closed",
        contentComponent: DrawerComponent
    });

export default createAppContainer(Drawer);