/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import * as ScreenAction from '@common';

/* Styles ==================================================================== */
const styles = StyleSheet.create({


});






class HomeScreen extends Component {
  static componentName = 'HomeScreen';
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: "",
    };
  }




  componentDidMount() {

    if (this.props.isRehydrated) {

    }
  }




  shouldComponentUpdate(nextProps, nextState) {

    if (ScreenAction.matchScreen(nextProps.name)) {

      if (this.props.isRehydrated === false && nextProps.isRehydrated === true) {
        this.LoadInitials(nextProps);
      }


    }

    return true;
  }



  LoadInitials = async (nextProps) => {

  }




  render() {
    return (
      <View style={{ backgroundColor: "red" }}>
        <SafeAreaView>
          <Text>{"test bhbhbbhhbh"}</Text>
        </SafeAreaView>
      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default HomeScreen;