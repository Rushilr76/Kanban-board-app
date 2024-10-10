/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './card.css'

function Card({
    id,
    title,
    tag,
    userId = '',
    status, 
    priority, groupByUser, groupByPriority}) 
{
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-id">{id}</div>
                <div className="card-avatar">
                    {groupByUser ? <></> : <img src="src/assets/avatar-people-user-svgrepo-com.svg" alt="Avatar"/>}
                    
                </div>
            </div>
            <h2 className="card-title">
                {(groupByUser || groupByPriority) ? status === "Backlog" ? 
                        <img src="src/assets/Backlog.svg" alt="Avatar"/>
                        : status === "Todo" ? (<img src="src/assets/To-do.svg" alt="Avatar"/>) 
                                        : (<img src="src/assets/in-progress.svg" alt="Avatar"/>) 
                    : <></> }
                {title}
            </h2>
            <div className="card-labels">
                {groupByPriority ? <></> : 
                <div className="label-custom">
                    <img src="/src/assets/3 dot menu.svg" alt="" />
                </div>
                }
                <div className="label">
                    <img className='grey_dot' src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Location_dot_grey.svg" alt="grey dot"/>
                    <span>
                        {tag}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card