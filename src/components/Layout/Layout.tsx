import { Container, Typography } from '@mui/material'
import './style.css'
import { Outlet ,Link} from 'react-router-dom'

export const Layout = () => {
    return <>
    <header style={{marginBottom:'300px'}}>
        <nav className="navbar">
            <ul>
                <Link to='/photos'>Photos</Link>
                <Link to='/videos'>Videos</Link>
            </ul>
        </nav>
    </header>
<Container
>
<Outlet/>
    </Container>
<footer>Footer</footer>
    </>
    

}