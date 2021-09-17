import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Search from './screens/Search';
import Transaction from './screens/Transaction';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const tabNavigator = createBottomTabNavigator({
  Transaction: { screen: Transaction },
  Search: { screen: Search }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if ( routeName === "Transaction"){
          return (
            <Image
            source={require("./assets/searchingbook.png")}
            style={{ width: 40, height: 40 }} />
          )
        }
        else if ( routeName === "Search"){
          return(
            <Image
            source={require("./assets/transactionImg.png")}
            style={{ width: 40, height: 40 }} />
          )
        }
    }
  })
}
)
const AppContainer = createAppContainer(tabNavigator)