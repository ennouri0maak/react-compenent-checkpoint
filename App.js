import React from 'react'
import User from '../src/profile/user.png' 
import Name from './profile/FullName'
import Adress from './profile/Address'
import './style.css';

export default function main() {
    return (
        <div>
            <br/>
          <img className="user" src={User} alt="user image" />
           <Name />
           <Adress/>
        </div>
    )
}
