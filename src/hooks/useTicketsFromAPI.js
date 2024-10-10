import { useState, useEffect } from 'react'

function useTicketsFromAPI() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((res) => (res.json())) 
        .then((res) => {setData(res.tickets)})
        .catch((error) => {
            console.error("Error fetching data:", error);
        })
    },[])

    console.log("Tickets data from API: ", data)
    
    return data;
}

export default useTicketsFromAPI