import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import ReadScrean from './comonents/ReadScrean';
import CreateScrean from './comonents/CreateScrean';
import UpdateScrean from './comonents/UpdateScrean';
import DeleteScrean from './comonents/DeleteScrean';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jármővek" component={ReadScrean}/>
        <Tab.Screen name="Új" component={CreateScrean}/>
        <Tab.Screen name="Módosít" component={UpdateScrean}/>
        <Tab.Screen name="Töröl"component={DeleteScrean}/>
      </Tab.Navigator>
    </NavigationContainer>
    
    
  );
}