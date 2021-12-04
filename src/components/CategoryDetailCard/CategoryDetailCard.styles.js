import { Dimensions, StyleSheet } from "react-native";

const DEVICE_SIZE=Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"black",
        margin:5
    },
    image:{
        width: 100,
        height:100,
    },
    bottom_container:{
        flex:1,
        margin:5,
        marginTop:0
    },
    title:{
        fontSize:17
    },
    source_detail:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
    },
    sourceName:{
        fontSize:18,
        fontStyle:"italic",
    },
    publishedAt:{
        fontSize:16,
        fontStyle:"italic",
    }
})