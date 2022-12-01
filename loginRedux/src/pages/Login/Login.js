import React from "react";
import {Text, View, Image} from 'react-native';
import styles from './Login.styles';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Formik } from "formik";

const Login = () => {
    function handleLogin(values){
        console.log(values);
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
                        />
                        <Input 
                            placeholder="Şifrenizi Giriniz"
                            value={values.password}
                            onType={handleChange('password')}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit}/>
                    </View>
                )}              
            </Formik>
        </View>
    );
};

export default Login;