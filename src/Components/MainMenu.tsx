import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TaskAlt from '@mui/icons-material/TaskAlt';
import ViewSidebar from '@mui/icons-material/ViewSidebar';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

//@ts-ignore
const MapIcon = ({name}) => {
    const nameIcon = {
        tasks: TaskAlt,
        projects: ViewSidebar,
        employees: PeopleAlt
    }
    //@ts-ignore
    const Icon = nameIcon[name]

    return (
        <Icon name={name} />
    )
}

export const MainMenu = () => {
    const menuItems= ['tasks', 'projects', 'employees'];

    const [selectedMenuItem, setSelectedMenuItem] = React.useState(0);

    const selectMenuItem = (index: number) => setSelectedMenuItem(index);

    return (
        <List>
            {menuItems.map((text, index) => (
                <Link to={text}>
                    <ListItem button key={text} selected={index === selectedMenuItem} onClick={() => selectMenuItem(index)} style={{textDecoration: 'none'}}>
                        <ListItemIcon>
                            <MapIcon name={text} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}
