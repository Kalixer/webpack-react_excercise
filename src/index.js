import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.scss';

export default function Render() {
    return <div id="app"></div>;
}

ReactDOM.render(<App />, document.getElementById("app"));

// ReactDOM.render( <App/> , document.getElementById('app'))