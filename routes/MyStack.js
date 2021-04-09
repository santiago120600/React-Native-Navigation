import React from 'react';
import Home from '../screens/Home';
import Task from '../screens/Task';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () =>{
    return (
         <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#841584'
                },
                headerTintColor: 'white',
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerTitleAlign:'center'
            }}
          >
          <Stack.Screen 
            name="Home" 
            component={Home} 
           />
          <Stack.Screen 
            name="Task" 
            component={Task} 
            options={({route})=>({title:route.params.task})}
           />
        </Stack.Navigator>       
    )
}

export default MyStack;
