import React from "react";
import { FlatList, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CategoryDetailCard from "../../components/CategoryDetailCard/CategoryDetailCard";
import categoryConverter from "../../components/CategoryConverter";


function CategoryDetail({route,navigation}) {
    const {category}=route.params
    const returnedCategory=categoryConverter(category).returnablecategory
    const url=`${Config.API_URL}country=${Config.COUNTRY}&category=${returnedCategory}&apiKey=${Config.API_KEY}`
   
    const {data, error, loading}=useFetch(url)

    if(loading){
        return(
           <Loading/>
        )
    }
    if(error){
       return (
           <Error/>
       )    
    }

    function renderNews({item}) {
        return <CategoryDetailCard news={item} navigation={navigation}/>
    }
    return(
        <View>
            <FlatList data={data.articles} renderItem={renderNews} keyExtractor={(item)=>item.title}/>
        </View>
    )
}

export default CategoryDetail;