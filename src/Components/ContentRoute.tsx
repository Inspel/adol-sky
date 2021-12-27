import React from 'react';
import { Route, Routes } from 'react-router';
import { Employees } from './Employees';
import { Projects } from './Projects';
import { Tasks } from './Tasks';

export const ContentRoute = () => {

    return (
        <Routes>
            
            <Route path="/mytasks" element={<Tasks />}/>     

            <Route path="/projects" element={<Projects />}/>

            <Route path="/employees" element={<Employees />}/>

        </Routes>
    )
}