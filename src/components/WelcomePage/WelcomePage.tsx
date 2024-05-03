import { Box, Card, CardHeader, Container, Grid, Typography } from "@mui/material"
import './style.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from "react-router-dom";
export const WelcomePage = () => {
    return <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            width: '100%',
            justifyContent: 'center',
            marginTop: '50px'
        }}
    >
        <Typography variant="h5"
            sx={{}}
        >Welcome To Gallery Application</Typography>
        <Box
            className='box'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                color: 'black',
                justifyContent: 'space-around',
                minHeight: '500px',
                alignItems: 'center'
            }}
        >
            <Card
                className="item-card"
                sx={{
                    width: '300px',
                    height: '300px',
                    marginRight: "100px"
                }}>
                <div className="box-title">
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'black'
                        }}
                    >Videos</Typography>
                </div>
                <div className="inner-box">
                    <Link to={'/videos'}>
                        <PlayCircleIcon
                            sx={{
                                width: '80%',
                                height: '80%'
                            }}
                        /></Link>
                </div>
            </Card>
            <Card
                className="item-card"
                sx={{
                    width: '300px',
                    height: '300px'
                }}>
                <Link to={'./photos'}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'black'
                        }}
                    >Photos</Typography>
                </Link>
            </Card>
        </Box>
    </Container>
}