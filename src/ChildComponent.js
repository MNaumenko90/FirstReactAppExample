import React from 'react';
import injectSheet from 'react-jss'

const styles = {
    root: {
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        margin:'0 auto',
        width:'100%',
        maxWidth:1200,
        boxSizing:'border-box',
        justifyContent:'space-between',
        '& > div': {
            padding:20
        },
    },
    imgWrap: {
        backgroundColor:'#fff',
        border:'1px solid #bbbbbb',
        maxWidth:265,
        '& img': {
            width:'100%',
            height:'auto',
        },
    },
};

const Card = ({classes,photo,name,surname}) => (
    <section className={classes.root}>
        <div className={classes.imgWrap}>
            <img src={photo} alt=""/>
        </div>
        <div>
            Your Name: {name}
        </div>
        <div>
            Your Surname: {surname}
        </div>
    </section>
);

export default injectSheet(styles)(Card)
