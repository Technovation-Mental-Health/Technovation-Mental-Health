/* import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface AppProps {}

interface AppState{
  message: string;
}

class App extends React.Component<AppProps, AppState>{
  constructor(props: AppProps) {
    super(props);
    this.state = {
      message: 'Welcome to the Anonymous Peer Counseling App',
    };
  }

  handButtonPress = () => {
    this.setState({message: ' You clicked the button'})
  };

  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{this.state.message}</Text>
        <Button
        title = "Click Me"
        onPress = {this.handButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App; */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContext';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name = 'Home' component = {HomeScreen} />
      <Stack.Screen name = 'Chat' component = {ChatScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const Root = () => {
  return(
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default Root;