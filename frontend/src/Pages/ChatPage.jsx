import React, { useEffect } from 'react'
import  axios  from 'axios';

export const ChatPage = () => {

    
    const call = async() => {
        const data = await axios.get('/chats/all');
        console.log(data);
    }
    
    useEffect(() => {
        call();
    }, [])

  return (
    <div>ChatPage</div>
  )
}
