import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import reactTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

reactTapEventPlugin()

ReactDOM.render(
<MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
