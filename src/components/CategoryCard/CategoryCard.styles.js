import { Dimensions, StyleSheet } from "react-native";

const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        
    },
    image: {
        width: deviceSize.width/3,
        height: deviceSize.width/3,
        justifyContent: 'center',
        resizeMode:"cover"
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        position:"absolute",
        bottom:0,
        alignSelf:"center"
    }
})