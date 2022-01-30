import axios from "axios";
import React, { useState, useEffect } from "react";

const Postss = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=bar&page=0")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>Author</tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            <tr key={index}>
              <td>{post.hits[0].author}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Postss;
