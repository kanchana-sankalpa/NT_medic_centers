/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Image, View, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as ScreenAction from '@common';
import RNLocation from 'react-native-location';


import json_medicalCenters_loc from "@constants/data.json";
import MapStyles from "@constants/mapStyles.json";

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
  markerImgStyle: {
    width: 60,
    height: 60,

  }

});






class HomeScreen extends Component {
  static componentName = 'HomeScreen';
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: "",
      curLocation: {
        latitude: 6.805383,
        longitude: 79.9426825
      },
      focusedRegion: {
        latitude: 6.805383,
        longitude: 79.9426825,
        latitudeDelta: 0.0050,
        longitudeDelta: 0.0021,
      }
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
    this._locationConfigurations();
  }


  _locationConfigurations = () => {
    const v = {
      androidProvider: "auto",
      distanceFilter: 5,
      interval: 2000,
      desiredAccuracy: {
        android: "balancedPowerAccuracy",
        ios: "best"
      }
    }
    RNLocation.configure(v)

    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {

          if (locations.length > 0) {
            const lastLocation = locations[(locations.length - 1)];
            const myLocation = {
              latitude: lastLocation.latitude,
              longitude: lastLocation.longitude
            };

            this.setState({
              curLocation: myLocation,

            }, () => console.log(`My Location`, this.state.curLocation))

          } else {
            console.log(locations)
          }

          /* Example location returned
          {
            speed: -1,
            longitude: -0.1337,
            latitude: 51.50998,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
            floor: 0
            timestamp: 1446007304457.029,
            fromMockProvider: false
          }
          */
        }).bind(this)
      }
    })
  }



  render() {
    const { focusedRegion } = this.state;
    return (
      <View style={styles.container}>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={focusedRegion}
          customMapStyle={MapStyles}
        >
          {this._renderCurrentLocation()}
          {this._renderNearMedicalCentersLocation()}
        </MapView>

      </View>
    )
  }

  _renderCurrentLocation = () => {
    const marker = this.state.curLocation;
    return (
      <Marker
        coordinate={{
          latitude: parseFloat(marker.latitude),
          longitude: parseFloat(marker.longitude),
        }}
        key={`marker_current`}
      >

        <Image style={styles.markerImgStyle} resizeMode={"contain"} source={require('@images/man.png')} />

      </Marker>
    )
  }
  _renderNearMedicalCentersLocation = () => {
    const data = json_medicalCenters_loc;
    console.log(data);
    return (
      <>
        {data.map((v, i) => (
          <Marker
            coordinate={{
              latitude: parseFloat(v.latitude),
              longitude: parseFloat(v.longitude),
            }}
            key={`marker_medical_center${i}`}
          >

            <Image style={styles.markerImgStyle} resizeMode={"contain"} source={require('@images/medical_center.png')} />

          </Marker>
        ))}

      </>

    )
  }


}




/* Export Component ==================================================================== */
export default HomeScreen;