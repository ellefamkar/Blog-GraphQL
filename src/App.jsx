import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";
import Blog from "./components/blog/Blog";
import Author from "./components/author/Author";
import Blogs from "./components/Blog/Blogs";
import Authors from "./components/author/Authors";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:slug" element={<Blog />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

// Notes for users:
// Let's begin with backend :
// 1- Go to GraphCMS -> hygraph.com:  https://hygraph.com/
// 2- create project -> create schema -> create models(posts, writers, comments)
//  2-1 post -> title + content + cover_photo + date_published + slug ---> add some posts
//  2-2 Author -> name + avatar + field + description + slug
//  2-3 connect authors with posts using Relations (Reference) in GraphCMS
//  2-4 Comment -> name + email + text +  Reference

// Let's build the front side:
// 1- Install GraphQL + Apollo/Client : npm install @apollo/client graphql
// 2- Initialize Graphql using apollo/client in main.jsx
// 3- connect react to graphCMS using apollo/client -> take uri from GraphCMS settings after giving full perimission inside the website
// 4- Install Material UI library for UI: npm install @mui/material @emotion/react @emotion/styled
// 5- Install material icon => npm i @mui/icons-material
// 6- start building components
