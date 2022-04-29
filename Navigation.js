import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './src/Home/ScreenHome';
import ScreenViewPhotos from './src/ViewPhotos/ScreenViewPhotos';
  
  const Stack = createNativeStackNavigator();
  
  const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenHome" screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name="ScreenHome" component={ScreenHome} />
          <Stack.Screen name="ScreenViewPhotos" component={ScreenViewPhotos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Navigation;