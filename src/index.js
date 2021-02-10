import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/MainPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./redux/reducer.js";

let store = createStore(reducer, applyMiddleware(thunk))

class App extends React.Component{

  render(){
      return(
         <MainPage/>
      )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
