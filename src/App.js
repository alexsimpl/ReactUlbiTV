import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description 1" },
    { id: 2, title: "Javascript 2", body: "Description 2" },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
      <div className="App">
          <PostForm create={createPost}></PostForm>
          <PostList posts={posts} title="Посты про JS"></PostList>
    </div>
  );
}

export default App;
