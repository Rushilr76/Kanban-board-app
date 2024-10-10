/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useTicketsFromAPI from '../hooks/useTicketsFromAPI'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header';
import './kanban-board.css'

function DisplayByStatus({tickets = [], orderByPriority, orderByTitle}) {

    // const tickets = useTicketsFromAPI();

    if(!tickets || tickets.length == 0) {
        console.log("EMPTY TICKETS!!");
        return <div>Loading....</div>
    }

    const groupedTickets = {
        todo: tickets.filter(ticket => ticket.status === 'Todo'),
        inProgress: tickets.filter(ticket => ticket.status === 'In progress'),
        backlog: tickets.filter(ticket => ticket.status === 'Backlog'),
        done: tickets.filter(ticket => ticket.status === 'Done'),
        cancelled: tickets.filter(ticket => ticket.status === 'Cancelled')
    };

    if(orderByPriority)
    {
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a, b) => b.priority - a.priority);
        })
    }

    if(orderByTitle)
    {
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
        })
    }

    return (
        <div className='kanban-board'>
            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Backlog.svg" alt="" />
                    Backlog  
                    <span className='count'>2</span>
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.backlog.map(ticket => (
                    <Card 
                        key={ticket.userId}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/To-do.svg" alt="" />
                    Todo
                    <span className='count'>3</span>
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.todo.map(ticket => (
                    <Card 
                        key={ticket.userId}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/in-progress.svg" alt="" />
                    In Progress
                    <span className='count'>5</span>
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.inProgress.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        userId={ticket.userId}
                        status={ticket.status}
                        priority={ticket.priority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Done.svg" alt="" />
                    Done
                    <span className='count'>0</span>
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.done.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        userId={ticket.userId}
                        status={ticket.status}
                        priority={ticket.priority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Cancelled.svg" alt="" />
                    Cancelled
                    <span className='count'>0</span>
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.cancelled.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        userId={ticket.userId}
                        status={ticket.status}
                        priority={ticket.priority}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplayByStatus