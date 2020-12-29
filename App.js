import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase'
require('firebase/auth')
const firebaseConfig = {
  apiKey: "AIzaSyA2u2sXWeRcw8wveFhA1Mx7OiZQexS3ay0",
  authDomain: "instagram-clone-dev-38db8.firebaseapp.com",
  projectId: "instagram-clone-dev-38db8",
  storageBucket: "instagram-clone-dev-38db8.appspot.com",
  messagingSenderId: "821705351626",
  appId: "1:821705351626:web:0ef2e5b9220b86e8132f33",
  measurementId: "G-YR7J4SF6ZC"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'


const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
          this.setState({
            loggedIn: true,
            loaded: true,
          })
      }
    })
  }
 
  render() {
    const { loaded, loggedIn} = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent:"center"}}>
        <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Landing">
            <Stack.Screen name="Landing" component = {LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component = {RegisterScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <View style={{flex:1, justifyContent:"center"}}>
        <Text>User is Logged In</Text>
      </View>
    )
  }
}
export default App
