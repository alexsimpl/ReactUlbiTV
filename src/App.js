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
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('Start function sort!!!')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

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
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск ..."
        />
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
        ? <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
      
    </div>
  );
}

export default App;
