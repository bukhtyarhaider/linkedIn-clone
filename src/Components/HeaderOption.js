import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'


function HeaderOption({name,avatar,Icon ,title ,onClick}) {
    return (
        <div onClick = {onClick} className='headerOption'>
            {Icon && <Icon className='headerOption_icon' />}
           { avatar &&  <Avatar className='headerOption_icon' src={avatar}>{name && name[0]}</Avatar>}
            <h3 className = 'headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
