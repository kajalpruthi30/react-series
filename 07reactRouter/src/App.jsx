import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github, { githubApiLoader } from './components/Github'
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element={<Layout/>}>
        <Route path = '/' element={<Home/>}/>
        <Route path = 'about' element={<About/>}/>    
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = 'user' element={<User/>}/>
        {/* all the content after user in the url is saved in userId */}
        <Route path = '/user/:userId' element={<User/>}/>
        <Route path = 'github' element={<Github/>} loader={githubApiLoader}/>
      </Route>
    )
)

  return (
    <RouterProvider router={router}/>
  );
}

export default App
