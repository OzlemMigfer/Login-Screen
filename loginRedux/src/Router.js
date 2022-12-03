import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Product from './pages/Products';
import Loading from "./components/Loading";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();

function App(){
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();
  
  return(
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading/>
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen 
            name="Product" 
            component={Product} 
            options={{ 
              headerRight: () => 
                <Icon 
                  name="logout" 
                  size={30} 
                  color="white" 
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
             }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;