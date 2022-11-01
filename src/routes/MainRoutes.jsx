import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
import Models from '../components/Models';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/models" element={<Models />} />
            <Route path="*" element={<h1>Error</h1>} />
        </Routes>
    );
};

export default MainRoutes;
