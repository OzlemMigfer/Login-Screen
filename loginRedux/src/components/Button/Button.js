import React from "react";
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';
import loading from '../Loading';

const Button = ({text, onPress}) => {
    return(
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress} 
            disabled={loading}
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={styles.title}>{text}</Text>
            )}     
        </TouchableOpacity>
    );
};

export default Button;