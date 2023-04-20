import React from 'react'

const fetchLineItems = async (sessionId: string) => {
    const res = await fetch(`
    ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${sessionId}`);

 if(!res) return

 const data = await res.json();
 const products = data.session.data;

  return products
    
}

export default fetchLineItems