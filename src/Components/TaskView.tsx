
import React from 'react';

import Send from '@mui/icons-material/Send';
import { useParams } from 'react-router';

export const TaskView = () => {

    let { id } = useParams();
    console.log(id, 'ID')
    return (
        <>

            <div>
                Titlle 
                ID {id} 
            </div>

            <div>
               Status
            </div>

            <div>
                Priority
            </div>

            <div>
                Assigne
            </div>

            <div>
               Reporter
            </div>

            <div>
                Logged Time
            </div>
            

            <div>
                Description
            </div>

            <div>
                Links
            </div>

            <div>
                Attachments
            </div>

            {/* Link to share task via tg need to template url as the task url*/}
            <a href={`https://t.me/share?url=https://github.com/tatar88t/adol-sky`} target="_blank"><Send /></a>
        </>
        
    )
}