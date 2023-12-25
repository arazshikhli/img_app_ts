import { AppBar, BottomNavigation, BottomNavigationAction, Box, Container, Toolbar, Typography } from '@mui/material'
import './style.css'
import { Outlet, Link } from 'react-router-dom'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
export const Layout = () => {
    return <div
        className='wrapper'
        style={{
            minHeight: '100vh'
        }}
    >
        <AppBar
            className='header'
            position='static'
            sx={{ width: '100%' }}
        >
            <Toolbar
                sx={{
                    textAlign: 'start'
                }}
            >
                <Link
                    style={{
                        flexGrow: 1,
                        width: 'auto'
                    }}
                    to={'/'}>
                    <Typography variant='h6'

                    >Gallery App</Typography>
                </Link>

                <Link to={'/photos'}
                    className='link'
                ><CameraAltRoundedIcon /> Photos </Link>
                <Link to={'/videos'}
                    className='link'
                ><OndemandVideoRoundedIcon /> Videos </Link>

                <Link to={'/about'}
                    className='link'
                ><InfoRoundedIcon /> About </Link>

            </Toolbar>
        </AppBar>
        <Container
            className='main'
        >
            <Outlet />
        </Container>
        <footer className='footer'>Footer</footer>
    </div>


}