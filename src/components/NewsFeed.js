import { useState, useEffect } from "react";
import axios from "axios";

function NewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live4.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Host": "crypto-news-live4.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const articleElements = articles.slice(0, 10);
  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {articleElements.map((item, _index) => (
        <div key={_index}>
          <a href={item.url}>
            <p>{item.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
