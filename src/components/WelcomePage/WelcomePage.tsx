import { Box, Card, CardHeader, Container, Grid, Typography } from "@mui/material"
import './style.css'
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
            sx={{
                display: 'flex',
                flexDirection: 'row',
                color: 'black',
                justifyContent: 'space-around'
            }}
        >
            <Card
                className="item-card"
                sx={{
                    width: '500px',
                    minHeight: '500px'
                }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'black'
                    }}
                >Videos</Typography>


            </Card>
            <Card
                className="item-card"
                sx={{
                    width: '500px',
                    minHeight: '500px'
                }}>

                <Typography
                    variant="h6"
                    sx={{
                        color: 'black'
                    }}
                >Photos</Typography>

            </Card>
        </Box>
    </Container>
}