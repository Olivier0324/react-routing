import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './pages/Dashboard/Settings'
import OverView from './pages/Dashboard/OverView'
import Analytics from './pages/Dashboard/Analytics'
import PostDetail from './pages/PostDetail'
import Posts from './pages/Posts'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Posts/>} />
          <Route path='postdetail/:id' element={<PostDetail/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index  element={<OverView />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App