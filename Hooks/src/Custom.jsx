import { useState, useEffect } from 'react';
import useFetch from './customhooks/useFetch';

function Custom() {
   const dataa= useFetch("https://jsonplaceholder.typicode.com/users")
        
    return (
        <>
            {dataa.map((res) => {
                return (
                    <h4 key={res.id}>
                        {res.id}. {res.name}
                    </h4>
                );
            })}
        </>
    )
}

export default Custom;
