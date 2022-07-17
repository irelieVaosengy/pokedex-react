import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import appStore from "./redux/app.store";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <Provider store={appStore}>
                        <App />
                    </Provider>
                }></Route>
            </Routes>
        </BrowserRouter>

);

reportWebVitals();
