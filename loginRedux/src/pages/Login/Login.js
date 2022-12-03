import React from "react";
import {Text, View, Image, Alert} from 'react-native';
import styles from './Login.styles';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Formik } from "formik";
import usePost from "../../hooks/usePost";
import Config from "../../../config";

const Login = ({navigation}) => {
    const {data, loading, error, post} = usePost();

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