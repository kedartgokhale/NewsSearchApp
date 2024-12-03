import React from 'react';
import '../css/NewsArticle.css';

function NewsArticle({ title, url, publishedDate, source }) {
    return (
        <div className="news-article">
            <h2>{title}</h2>
            <p>{publishedDate}</p>
            <p><strong>Source:</strong> {source}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
}

export default NewsArticle;