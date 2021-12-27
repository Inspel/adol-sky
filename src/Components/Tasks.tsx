import React from 'react';
import Send from '@mui/icons-material/Send'
import { Route, Router, Routes } from 'react-router';
import { TaskView } from './TaskView';
import { Link } from 'react-router-dom';


export const Tasks = () => {
    return (
        <>
            <div>TASKS ELEMENT</div>
            
            <Link to="/tasks/1">Link to 1</Link>
            <br />
            <Link to="/tasks/2">Link to 2</Link>

        </>
        
    )
}