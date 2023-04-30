import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyInput from "./components/UI/input/MyInput"
import MyButton from "./components/UI/button/MyButton";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "жж", body: "бб" },
    { id: 2, title: "дд", body: "аа" },
    { id: 3, title: "вв", body: "яя" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
  setPosts([...posts, newPost])
 }

  //Получаем пост из дочернего компонента
  const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <div>
       <MySelect 
       value={selectedSort}
       onChange={sortPosts}

        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
       />
      </div>
      {posts.length 
        ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
      
    </div>
  );
}

export default App;
