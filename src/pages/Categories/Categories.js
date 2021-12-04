import React from "react";
import { FlatList, View } from "react-native";
import categoryData from "../../assets/category_data.json";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./Categories.styles";

function Categories({navigation}) {

    const renderCategory=({item})=>{
        return(
            <CategoryCard title={item.category} image={item.imageId} navigation={navigation}/>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList data={categoryData} renderItem={renderCategory} 
            keyExtractor={(item)=>item.category} numColumns={3}/>
        </View>
    )
}

export default Categories;