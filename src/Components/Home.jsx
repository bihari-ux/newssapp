import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const location = useLocation(); // This will help track route change

  // Fetch Data based on the route and query parameter (q)
  const getAPIData = async () => {
    setPage(1); // Reset page number when new category or query comes
    setIsLoading(true); // Start loading
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${
        props.language
      }&pagesize=24&page=1&sortBy=publishedAt&apiKey=807d700957354e9794ec9a60f0d7d8bc`
    );
    response = await response.json();
    if (response.status === "ok") {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"));
      setTotalResults(response.totalResults);
    }
    setIsLoading(false); // Stop loading
  };

  // Fetch more data when user scrolls
  const fetchData = async () => {
    setPage(page + 1);
    setIsLoading(true); // Start loading
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${props.language}&pagesize=24&page=${
        page + 1
      }&sortBy=publishedAt&apiKey=807d700957354e9794ec9a60f0d7d8bc`
    );
    response = await response.json();
    if (response?.status === "ok") {
      setArticles((prevArticles) => [
        ...prevArticles,
        ...response.articles.filter((x) => x.title !== "[Removed]"),
      ]);
    }
    setIsLoading(false); // Stop loading
  };

  // Using useEffect to trigger API call when route or props.q changes
  useEffect(() => {
    getAPIData(); // Fetch data when route or category changes
  }, [location, props.search, props.q, props.language]); // Dependencies to watch route, search, and language changes

  return (
    <div className="container-fluid">
      <h5 className="background text-light text-center p-2 mt-2 text-capitalize">
        {props.search ? props.search : props.q} Articles
      </h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults && !isLoading} // Hide spinner when all data is loaded
        loader={
          isLoading && (
            <div className="my-5 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          )
        }
      >
        <div className="row">
          {articles.map((item, index) => {
            return (
              <NewsItem
                key={index}
                source={item.source.name ?? "N/A"}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage ?? "/images/noimage.png"}
                date={item.publishedAt}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
