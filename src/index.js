import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const container = document.getElementById('root');
const root = createRoot(container);

const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache()
});

root.render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>
                }></Route>
            </Routes>
        </BrowserRouter>

);

reportWebVitals();
