// src/screens/Home.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Page</Text>
      <Button
        title="PERGI KE MOVIE DETAIL"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  );
};

export default Home;
