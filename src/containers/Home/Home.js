/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as ScreenAction from '@common';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

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
      <View style={styles.container}>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>

      </View>
    )
  }
}

/* Export Component ==================================================================== */
export default HomeScreen;