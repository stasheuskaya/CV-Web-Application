import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './assets/styles/styles.css';
import App from './App';
import { loadEducations, loadSkills } from './store/thunks/thunks';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import server from './services/server';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

server();
store.dispatch(loadEducations())
store.dispatch(loadSkills())

root.render(
    <Router>
        <Provider store={store}>
          <App />
        </Provider>
    </Router>
);
