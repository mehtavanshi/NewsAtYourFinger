
import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

export default class App extends Component {
  pageSize=4;
  apiKey = '61a273077d1e43bd9a3dd9ba96757b06';
  render() {
    return (
      <div>
        
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='general' />}></Route>
            <Route path='/general' element={<News key='general' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

