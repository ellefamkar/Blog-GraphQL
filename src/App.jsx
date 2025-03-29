import './App.css'

function App() {

  return (
    <>
     <h1>Graph QL blog</h1>
    </>
  )
}

export default App

// Notes for users:
// for backend : 
// GraphCMS -> hygraph.com:  https://hygraph.com/
// -> create project -> create schema -> create models(posts, writers, comments)
// -> post -> title + content + cover_photo + date_published + slug
// ---> add some posts 
// -> Author -> name + avatar + field + description + slug
// --> connect authors with posts using Relations (Reference) in GraphCMS
// -> Comment -> name + email + text +  Reference 

// Let's build the front side:
// Install GraphQL + Apollo/Client
// : npm install @apollo/client graphql
// Initialize Graphql using apollo/client in main.jsx
// connect react to graphCMS using apollo/client
// Install Material UI library for UI
// : npm install @mui/material @emotion/react @emotion/styled
//


