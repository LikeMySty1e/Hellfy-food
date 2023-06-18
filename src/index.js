import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainStore from './store/MainStore';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
      main: new MainStore()
    }}>
        <App />
        <ErrorMessage />
    </Context.Provider>
);
