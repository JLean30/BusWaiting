import React from 'react';
import { Text, View } from 'react-native';
import Styles from './app/styles/Styles';
import SearchButton from './app/components/SearchButtom';
import Geolocation from 'react-native-geolocation-service';
import * as Permissions from 'expo-permissions';

export default function App() {
  
  geoSuccess = (position) => {
    console.log(position.coords.latitude + " "+ position.coords.longitude);}

  test= async () =>{
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                                this.geoFailure,
                                                geoOptions);
                                                
        
    
    }
  }
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.containerCenter}>
      <SearchButton title='Bus cercano' onPress={this.test}/>
      </View>
    </View>
  );
}

