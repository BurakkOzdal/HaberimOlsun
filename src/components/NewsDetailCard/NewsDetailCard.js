import React from "react";
import { Image, Linking, SafeAreaView, ScrollView, Text,View, TouchableOpacity } from "react-native";
import styles from "./NewsDetailCard.styles";


function NewsDetailCard({ url, title, description, image }) {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.title}>{title}</Text>

                <View stlye={styles.bottom_container}>
                    <Text style={styles.description}>{description}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
                        <Text style={styles.button_text}>Devamı için Tıklayın...</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default NewsDetailCard;