import React from 'react';
import {View, Text, Button} from 'react-native';
import {global} from '../styles/global';

const Task = ({navigation}) =>{

    const goToHome=()=>{
        navigation.pop();
    }

    return (
        <View style={global.container}>
            <Text>Task</Text>
            <Button
                title="Back to home"
                onPress={goToHome}
                color="#841584"
            />
        </View>
    )
}

export default Task;
