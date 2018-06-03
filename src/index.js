import React from 'react';
import ReactDOM from 'react-dom';
import GetPokemons from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GetPokemons />, document.getElementById('root'));
registerServiceWorker();
