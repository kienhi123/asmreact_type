import React from 'react'
import {User} from '../type/user'
type Props = {}

export const authenticated = (user:User,next:()=>void) => {
    localStorage.setItem('user',JSON.stringify(user))
    next();
}

export const isAuthenticate=()=>{
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}

