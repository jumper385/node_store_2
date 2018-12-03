import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Nav extends Component{
    render() {
        return(
            <div>
                <h1>NAVBAR!!!</h1>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/products'>products</Link></li>
            </div>
        )
    }
}

export default Nav