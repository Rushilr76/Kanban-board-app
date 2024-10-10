/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useTicketsFromAPI from '../hooks/useTicketsFromAPI'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header';
import './kanban-board.css'

function DisplayByPriority({tickets = [], groupByPriority, orderByPriority, orderByTitle}) {

    // const tickets = useTicketsFromAPI();

    if(!tickets || tickets.length == 0) {
        console.log("EMPTY TICKETS!!");
        return <div>Loading....</div>
    }

    const groupedTickets = {
        priority0: tickets.filter(ticket => ticket.priority === 0),
        priority1: tickets.filter(ticket => ticket.priority === 1),
        priority2: tickets.filter(ticket => ticket.priority === 2),
        priority3: tickets.filter(ticket => ticket.priority === 3),
        priority4: tickets.filter(ticket => ticket.priority === 4)
    };

    if(orderByPriority)
    {
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a,b) => b.priority - a.priority)
        })
    }
        
    if(orderByTitle)
    {
        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a,b) => a.title.localeCompare(b.title))
        })
    }

    return (
        <div className='kanban-board'>
            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/3 dot menu.svg" alt="" />
                    No Priority
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.priority0.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                        groupByPriority={groupByPriority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/SVG - Urgent Priority colour.svg" alt="" />
                    Urgent
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.priority4.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                        groupByPriority={groupByPriority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Img - High Priority.svg" alt="" />
                    High
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.priority3.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                        groupByPriority={groupByPriority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Img - Medium Priority.svg" alt="" />
                    Medium
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.priority2.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                        groupByPriority={groupByPriority}
                    />
                ))}
            </div>

            <div className="kanban-column">
                <h3>
                    <img src="/src/assets/Img - Low Priority.svg" alt="" />
                    Low
                    <span className='icons'>
                        <img src="src/assets/add.svg" alt="" />
                        <img src="src/assets/3 dot menu.svg" alt="" />
                    </span>
                </h3>
                {groupedTickets.priority1.map(ticket => (
                    <Card 
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        status={ticket.status}
                        priority={ticket.priority}
                        groupByPriority={groupByPriority}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplayByPriority