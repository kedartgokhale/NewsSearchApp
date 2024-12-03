import React, { useState } from 'react';
import NewsArticle from './NewsArticle';
import '../css/NewsSearch.css';

function NewsSearch() {
    const [keyword, setKeyword] = useState('');
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handleSearch = async (e, page = 1) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/search?keyword=${keyword}&page=${page}`);
        const data = await response.json();
        setArticles(data.articles);
        setCurrentPage(page);
        setTotalPages(10); // Assuming the backend returns totalPages
    };

    const handleNextPage = (e) => {
        if (currentPage < totalPages) {
            handleSearch(e, currentPage + 1);
        }
    };

    const handlePreviousPage = (e) => {
        if (currentPage > 1) {
            handleSearch(e, currentPage - 1);
        }
    };

    const guardianArticles = articles.filter(article => article.source === 'The Guardian');
    const nyTimesArticles = articles.filter(article => article.source === 'The New York Times');

    return (
        <div>
            <form onSubmit={(e) => handleSearch(e, 1)} className="search-form">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword"
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {articles.length > 0 && (
                <>
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    </div>
                    <div className="news-container">
                        <div className="news-box">
                            <h2>The Guardian</h2>
                            {guardianArticles.map((article, index) => (
                                <NewsArticle key={index} {...article} />
                            ))}
                        </div>
                        <div className="news-box">
                            <h2>The New York Times</h2>
                            {nyTimesArticles.map((article, index) => (
                                <NewsArticle key={index} {...article} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default NewsSearch;