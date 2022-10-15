import { Avatar } from '@mui/material'
import React from 'react'
import './UserSuggestion.css'

function UserSuggestion({userProfileUrl,userName,userInfo}) {
    return (
        <div className='userSuggestion'>
        <Avatar src={userProfileUrl}>S</Avatar>
            <div className='userSuggestionContainer'>
                <h5>{userName}</h5>
                <p>{userInfo}</p>
                <button className='followBtn'>+ Follow</button>
            </div>
        </div>
    )
}

export default UserSuggestion
