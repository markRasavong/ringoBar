import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import { Button, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import styles from '../../../styles/Hero.module.css';

const Hero = () => {

    return (
        <Fragment>
            <Grid container className={styles.hero_div}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src='/pizza-hero.png' alt='image of a pizza on the hero section of the main page' className={styles.heroPic} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' component='div' gutterBottom>
                        Hoy, estamos 'ABIERTO' o 'Cierrado' + today's hours: Pide por
                    </Typography>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='tel:+34-624-41-45-18'><PhoneInTalk className={styles.buttonSticker} /> Llamar</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='https://www.just-eat.es/restaurants-ringo-bar-valencia/menu' target="_blank"><img src='/just-eat-logo.png' alt='Just Eat Logo' className={styles.buttonSticker} /> Just Eat</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='https://glovoapp.com/es/es/valencia/ringo-bar-valencia/' target="_blank"><img src='/glovo.png' alt='Glovo Logo' className={styles.buttonSticker} /> Glovo</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
            <Typography variant='h5' component='div' gutterBottom>social media icons here</Typography>
        </Fragment>
    )
}

export default Hero;