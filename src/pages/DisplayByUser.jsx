/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../components/Card/Card';

function DisplayByUser({users = [], tickets = [], groupByUser, orderByPriority, orderByTitle}) {

    if(!users || users.length == 0) {
        console.log("EMPTY users!!");
        return <div>Loading....</div>
    }

    const groupedByUser = users.map(user => ({
        ...user,
        tickets: tickets.filter(ticket => ticket.userId === user.id)
    }));

    if(orderByPriority)
    {
        groupedByUser.forEach(user => {
            user.tickets.sort((a, b) => b.priority - a.priority)
        })
    }
    
    if(orderByTitle)
    {
        groupedByUser.forEach(user => {
            user.tickets.sort((a, b) => a.title.localeCompare(b.title))
        })
    }

    return (
        <div className='kanban-board'>
            {groupedByUser.map((user) => (
                <div className="kanban-column" key={user.name}>
                    <h3 className='custom-header'>
                        <img className='profileImg' src="src/assets/avatar-people-user-svgrepo-com.svg" alt="Avatar"/>
                        {user.name}
                        <span className='icons'>
                            <img src="src/assets/add.svg" alt="" />
                            <img src="src/assets/3 dot menu.svg" alt="" />
                        </span>
                    </h3>
                    {user.tickets.map((ticket) => (
                        <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            userId={ticket.userId}
                            status={ticket.status}
                            priority={ticket.priority}
                            groupByUser={groupByUser}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default DisplayByUser