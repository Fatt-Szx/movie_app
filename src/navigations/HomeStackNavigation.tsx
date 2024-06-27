// src/navigations/HomeStackNavigation.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import MovieDetailScreen from '../screens/MovieDetail';

export type HomeStackParamList = {
  Home: undefined;
  MovieDetail: { movieId: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
