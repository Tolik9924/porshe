import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// components
import Car from '../components/Car';
import Main from '../components/Main';
import Models from '../components/Models';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<Car />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default MainRoutes;
