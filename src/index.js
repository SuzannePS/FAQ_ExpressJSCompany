import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './reset.css';

const root= ReactDom.createRoot(
    document.getElementById('root')
);
root.render(<App></App>);