import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#99e699"
   } ,
   logo_container:{
      flex:1
   },
   logo:{
      flex:1,
      alignSelf:'center',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height/4,
      color:'white'
   },
   body_container:{
      flex:1  
   }
});