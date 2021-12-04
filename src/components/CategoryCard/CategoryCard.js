import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./CategoryCard.styles";

function CategoryCard({ title, image, navigation}) {

    const image_base_url = "https://images.unsplash.com/photo-"
    const image_parameters = "?auto=format&fit=crop&w=500&q=80"

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("CategoryDetail",{category:title})}>
                <View>
                    <Image style={styles.image} source={{uri:`${image_base_url}${image}${image_parameters}`}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        
    )

}

export default CategoryCard;