import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

    const StyledHero = styled('div')(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled('img')(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.secondary.main}`,
    }))

    return (
        <>
            <StyledHero>

                <Container maxWidth="lg">

                    <Grid container spacing={2}>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <StyledImg src={Avatar} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Flavia Rosa</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Full-Stack Developer</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button color="secondary" variant="outlined">
                                    <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button color="secondary" variant="outlined">
                                        <EmailIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Container>

            </StyledHero>
        </>
    )
}

export default Hero
