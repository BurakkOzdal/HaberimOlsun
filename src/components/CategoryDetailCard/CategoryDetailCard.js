import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import prettyTime from "../PrettyTime/PrettyTime";
import styles from "./CategoryDetailCard.styles";


function CategoryDetailCard({ news, navigation }) {

    return (

        <TouchableWithoutFeedback onPress={()=>navigation.navigate("NewsDetail",{news:news})}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: news.urlToImage }} />

                <View style={styles.bottom_container}>

                    <Text style={styles.title}>{news.title}</Text>

                    <View style={styles.source_detail}>

                        <Text style={styles.sourceName}>{news.sourceName}</Text>

                        <Text style={styles.publishedAt}>{prettyTime(news.publishedAt)}</Text>
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
export default CategoryDetailCard;