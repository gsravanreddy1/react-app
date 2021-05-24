//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

//const Header = () => {
//const Header = (props) => { // with this use as props.title
 const Header = ({title, addPage, toggleAddTask}) => {  
    
    const location = useLocation();
    
    return (
        <header className="header">
            <h1> {title} </h1> 
            {
             location.pathname === '/' && 
             <Button color={toggleAddTask ? 'grey':'green'} text={toggleAddTask ? 'Close':'Add'} onClick={addPage} />           
             }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Enable below to add CSS in js inline like  <h1 style={headerCSS}> {title} </h1>

// const headerCSS = {
//     color:"red", 
//     backgroundColor:"black"
// }

export default Header
