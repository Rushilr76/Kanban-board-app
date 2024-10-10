 /* eslint-disable react/prop-types */
import './header.css'

function Header({groupRef, orderRef, onGroupChange, onOrderChange}) {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">
                    <span>
                        <img src="/src/assets/Display.svg" alt="" />    
                    </span> 
                    Display
                    <span className="arrow">
                        <img src="/src/assets/down.svg" alt="" />
                    </span>
                </button>
            
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <label htmlFor="grouping">Grouping</label>
                        <select ref={groupRef} id="grouping" onChange={(e) => onGroupChange(e.target.value)}>
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>

                    <div className="dropdown-item">
                        <label htmlFor="ordering">Ordering</label>
                        <select ref={orderRef} id="ordering" onChange={(e) => onOrderChange(e.target.value)}>
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header