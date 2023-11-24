
import React from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App =()=> {
  let pageSize=4;
  let apiKey = '61a273077d1e43bd9a3dd9ba96757b06';
  
    return (
      <div>
        
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={pageSize} apiKey={apiKey} country='in' category='general' />}></Route>
            <Route path='/general' element={<News key='general' pageSize={pageSize} apiKey={apiKey} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={pageSize} apiKey={apiKey} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={pageSize} apiKey={apiKey} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={pageSize} apiKey={apiKey} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={pageSize} apiKey={apiKey} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={pageSize} apiKey={apiKey} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={pageSize} apiKey={apiKey} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;

