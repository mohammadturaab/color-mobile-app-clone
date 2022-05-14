import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-nacigation/native';
import {createStackNavigation} from '@react-navigation/stack';

import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import DrawerNavigationRoutes from './src/Screens/DrawerNavigationRoutes';

const Stack = createStackNavigation();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName = "LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          option={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
    </Stack.Navigator>

  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          option={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigation}
          option={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
