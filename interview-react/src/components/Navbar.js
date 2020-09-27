import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to ="/participants">View All Participants</Link> | 
            <Link to ="/">View All Interviews</Link>
        </div>
    )
}
