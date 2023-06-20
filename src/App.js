import React, { Component } from 'react';
import Search from "./components/search/Search";
import './App.css';
import { ThemeProvider } from '@mui/system';



class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <div>
          <Search />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;