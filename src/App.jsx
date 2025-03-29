import Header from './components/layout/Header'

function App() {

  return (
    <>
     <Header />
    </>
  )
}

export default App

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


