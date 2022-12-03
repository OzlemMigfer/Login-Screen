import React from "react";
import { TextInput,View } from "react-native";
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, onType, value, iconName, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                onChangeText={onType} 
                value={value}
                secureTextEntry={isSecure}
            />
            <Icon style={styles.icon} name={iconName}/>
        </View>
    );
};

export default Input;