import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=10;
  country="us";

  state={progress:0}

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }

  apiKey = process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category="general"/>}></Route>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={this.country} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} category="health"/>}></Route>
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} category="science"/>}></Route>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

