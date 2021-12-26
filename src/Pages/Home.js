import { Grid } from '@material-ui/core';
import MediaCard from '../Components/Card';
import Header from '../Components/Header';
import useFetch from '../Hooks/useFetch';
import CircularProgressLoading from '../Components/CircularProgressLoading';
import images from '../Assets/assets.js';
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => {
    return {

        main: {
            background: 'white'
        },
        headerimg: {
            width: '100%'
        },

        hospitalimg: {
            width: '50%',
            marginRight: '25%',
            marginLeft: '25%',
            marginTop: '-15%',
            marginBottom: '15%'
        },
        serviceimg: {
            width: '80%',
            marginBottom: '30%',
            marginLeft: '10%',
            marginTop: '10%',
        },
        headertxt: {

            position: 'absolute',
            marginTop:'10%',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '5vw',
            fontWeight: 900,
        },
        headersubtxt: {

            position: 'absolute',
            marginTop:'20%',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '3vw',
            fontWeight: 700,
            fontStyle: 'italic'
        },
        footer: {

            left: 0,
            bottom: 0,
            width: '100%',
            marginTop: '10%'

        },
        headertxtservice: {
            width: '100%',
            textAlign: 'center',
            color: 'black',
            fontSize: '5vw',
            fontWeight: 900,
        },
        headersubtxtservice: {
            width: '100%',
            textAlign: 'justify',
            color: 'black',
            fontSize: '2vw',
            fontWeight: 700,
            fontStyle: 'italic',
            marginLeft: '10%',
        },

    }

})


function Home() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <div>
                <div>
                    <h1 className={classes.headertxt}>DeepHeal AI</h1>
                    <h3 className={classes.headersubtxt}>Help is here.....</h3>
                </div>
                <img src={images.header} className={classes.headerimg} />
                <img src={images.hospital} className={classes.hospitalimg} />

                <Grid direction='row' container spacing={1}>
                    <Grid container item sm={6}>

                        <p className={classes.headersubtxtservice}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                    </Grid>
                    <Grid container item sm={6}>
                        <img src={images.service} className={classes.serviceimg} />
                    </Grid>
                </Grid>

            </div>

            <div className={classes.footer}>
                <img src={images.footer} className={classes.headerimg} />
            </div>
        </div>
    )
}

export default Home
