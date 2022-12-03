import React from "react";
import {Text, View, Image, Alert} from 'react-native';
import styles from './Login.styles';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Formik } from "formik";
import usePost from "../../hooks/usePost";
import Config from "../../../config";
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
    const {data, loading, error, post} = usePost();
    const dispatch = useDispatch();

    function handleLogin(values){
        post(Config.API_AUTH_URL + '/login', values);
    }

    if(error){
        Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!');
    }

    if(data){
        if(data.status == 'Error'){
            Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!');
        }else{
            dispatch({type: 'SET_USER', payload:{user}});
            navigation.navigate('Product');
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/shopping-logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({handleSubmit, handleChange, values}) => (
                    <View style={styles.body_container}>
                        <Input 
                            placeholder="Kullanıcı Adınızı Giriniz"
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input 
                            placeholder="Şifrenizi Giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}              
            </Formik>
        </View>
    );
};

export default Login;

const user = {
    "address":{
        "geolocation":{
            "lat":"20.1677","long":"-10.6789"
        },
        "city":"el paso",
        "street":"prospect st",
        "number":124,
        "zipcode":"12346-0456"
    },
    "id":6,
    "email":"david_r@gmail.com",
    "username":"david_r",
    "password":"3478*#54",
    "name":{
        "firstname":"david",
        "lastname":"russell"
    },
    "phone":"1-678-345-9856",
    __v:0,
};