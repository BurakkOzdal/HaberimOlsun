import { Dimensions, StyleSheet } from "react-native";

const DEVICE_SIZE=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    image:{
        width:DEVICE_SIZE.width*0.95,
        height:250,
    },
    title:{
        fontWeight:"bold",
        fontSize:26,
        color:"#880e4f",
    },
    description:{
        fontSize:24,
        color:"#37474f",
    },
    bottom_container:{
        flex:1,
        flexDirection:"row"
    },
    button:{
        
    },
    button_text:{
        fontSize:19,
        color:"#880e4f",
    },
})