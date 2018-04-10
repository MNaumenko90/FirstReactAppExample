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
};

const Card = ({classes,birth,workPlace,address,phone}) => (
    <section className={classes.root}>
        <div>
            Your Date of Birth: {birth}
        </div>
        <div>
            Your place of work: {workPlace}
        </div>
        <div>
            Your address: {address}
        </div>
        <div>
            Your phone: {phone}
        </div>
    </section>
);

export default injectSheet(styles)(Card)
