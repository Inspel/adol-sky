import React from 'react';
import { Route, Routes } from 'react-router';
import { Employees } from './Employees';
import { Projects } from './Projects';
import { Tasks } from './Tasks';
import { TaskView } from './TaskView';

export const ContentRoute = () => {

    return (
        <Routes>
            
            <Route path="/tasks" element={<Tasks />}/>     

            <Route path="/projects" element={<Projects />}/>

            <Route path="/employees" element={<Employees />}/>

            <Route path="/tasks/:id" element={<TaskView />}/>
        </Routes>
    )
}