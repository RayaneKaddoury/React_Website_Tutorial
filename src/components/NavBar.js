import React from 'react'
import CustomBtn from './CustomBtn'
import avatar from '../avatar.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "7%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile:{
        width: "20%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#9599E2"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={avatar} className={classes.logo}/>
            <img src={avatar} className={classes.logoMobile}/>
            <Typography variant="h6" className={classes.menuItem}>
                Home
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Portfolio
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Experiences
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <CustomBtn txt="Contact Me"/>
        </Toolbar>
    )
}

export default NavBar
