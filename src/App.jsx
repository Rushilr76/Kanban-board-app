/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import useTicketsFromAPI from './hooks/useTicketsFromAPI'
import useUsersFromAPI from './hooks/useUsersFromAPI'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import DisplayByStatus from './pages/DisplayByStatus'
import DisplayByUser from './pages/DisplayByUser'
import DisplayByPriority from './pages/DisplayByPriority'

function App() {
  const tickets = useTicketsFromAPI();
  const users = useUsersFromAPI();

  const groupRef = useRef(null);
  const orderRef = useRef(null);

  const [groupByUser, setGroupByUser] = useState(false);
  const [groupByPriority, setGroupByPriority] = useState(false);

  const [orderByPriority, setOrderByPriority] = useState(false)
  const [orderByTitle, setOrderByTitle] = useState(false)

  const handleGroupChange = (groupValue) => {
    console.log("Group changed to:", groupValue);
    setGroupByUser(groupValue === 'user');
    setGroupByPriority(groupValue === 'priority')
    localStorage.setItem("groupBy", JSON.stringify(groupValue))
  };
  
  // useEffect with dependency on groupRef.current?.value will not work as refs don't trigger re-render when value changes

  const handleOrderChange = (orderValue) => {
    console.log("Order changed to:", orderValue);
    setOrderByPriority(orderValue === 'priority')
    setOrderByTitle(orderValue === 'title')
    localStorage.setItem("orderBy", JSON.stringify(orderValue))
  }

  useEffect(() => {
    const storedGroupBy = JSON.parse(localStorage.getItem("groupBy"));
    const storedOrderBy = JSON.parse(localStorage.getItem("orderBy"));

    setGroupByUser(storedGroupBy === "user");
    setGroupByPriority(storedGroupBy === "priority");
    setOrderByPriority(storedOrderBy === "priority");
    setOrderByTitle(storedOrderBy === "title");
  }, []);

  return (
    <>
      <Header groupRef={groupRef} orderRef={orderRef} onGroupChange={handleGroupChange} onOrderChange={handleOrderChange}/>
      {groupByUser ? (
        <DisplayByUser users={users} tickets={tickets} groupByUser={groupByUser} orderByPriority={orderByPriority} orderByTitle={orderByTitle}/>
      ) : groupByPriority ? (
          <DisplayByPriority tickets={tickets} groupByPriority={groupByPriority} orderByPriority={orderByPriority} orderByTitle={orderByTitle}/>
        ) : (<DisplayByStatus tickets={tickets} orderByPriority={orderByPriority} orderByTitle={orderByTitle}/>)
      }
    </>
  )
}

export default App
