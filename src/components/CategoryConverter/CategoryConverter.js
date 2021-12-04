import React from "react";

function CategoryConverter(category) {
    let returnablecategory=""
    switch (category) {
        case "Teknoloji":
            returnablecategory="technology"
        break;
        case "Spor":
            returnablecategory="sport"
        break;
        case "Sağlık":
            returnablecategory="health"
        break;

        case "Ekonomi":
            returnablecategory="business"
        break;

        case "Eğitim":
            returnablecategory="entertainment"
        break;

        case "Müzik":
            returnablecategory="science"
        break;

        case "Tiyatro":
            returnablecategory="general"
        break;

        case "Sinema":
            returnablecategory="general"
        break;

        case "Hava":
            returnablecategory="weather"
        break;

        case "Seyahat":
            returnablecategory="general"
        break;

        case "Astroloji":
            returnablecategory="general"
        break;

        case "Otomobil":
            returnablecategory="cars"
        break;

        case "Galeri":
            returnablecategory="general"
        break;

        case "Video":
            returnablecategory="general"
        break;

        default:
            returnablecategory=" "
        break;
    }
    
    return {returnablecategory}
}

export default CategoryConverter;