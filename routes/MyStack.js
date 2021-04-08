import React from 'react';
import Home from '../screens/Home';
import Task from '../screens/Task';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () =>{
    return (
         <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>       
    )
}

export default MyStack;
