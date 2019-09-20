import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DiceRoll from './App';
import * as serviceWorker from './serviceWorker';






ReactDOM.render(<DiceRoll />, document.getElementById('root'));

serviceWorker.unregister();
