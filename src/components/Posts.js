import { useEffect, useState } from "react";
import Post from "./Post";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  //
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  /**
   * without async
   */
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  //
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="wrapper">
      <h1>Posts</h1>
      <div className="posts">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((post) => <Post {...post} key={post.id} />)
        )}
      </div>
    </div>
  );
}
export default Posts;
