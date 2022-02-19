import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MakeSignUp} from '../factories/pages';

const Stack = createNativeStackNavigator();

const BaseRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={MakeSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseRouter;
