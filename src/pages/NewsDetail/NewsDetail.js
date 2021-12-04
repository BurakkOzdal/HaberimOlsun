import React from "react";
import NewsDetailCard from "../../components/NewsDetailCard";

function NewsDetail({route}) {
    const {news}=route.params
   
    return(
       <NewsDetailCard url={news.url} title={news.title} description={news.description} image={news.urlToImage}/>
    )
}

export default NewsDetail;