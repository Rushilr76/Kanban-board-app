import { useState, useEffect } from "react"

function useUsersFromAPI() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((res) => (res.json())) 
        .then((res) => {setData(res["users"])})
    },[])

    console.log("Users data from API: ", data)
    
    return data;
}

export default useUsersFromAPI