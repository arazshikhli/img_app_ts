import { Link, Typography } from '@mui/material'
import './style.css'

export const Header = () => {
    return <header>
        <nav className="navbar">
            <ul>
                <Link top={'/videos'}><Typography
                    sx={{
                        textDecoration: 'none'
                    }}
                    variant='h6'>Videos</Typography></Link>
                <Link
                    sx={{
                        textDecoration: 'none'
                    }}
                    top={'/photos'}><Typography variant='h6'>Videos</Typography></Link>
                <Link
                    sx={{
                        textDecoration: 'none'
                    }}
                    top={'/about'}><Typography variant='h6'>Videos</Typography> us</Link>
            </ul>
        </nav>
    </header>
}