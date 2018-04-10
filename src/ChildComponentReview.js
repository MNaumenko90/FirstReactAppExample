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
    textarea: {
        minHeight:200,
        maxHeight:300,
        maxWidth:200,
        minWidth:150,
        padding:10
    },
};

const Card = ({classes,review}) => (
    <section className={classes.root}>
        <div>
            <p>Review about me:</p>
            <textarea placeholder={review} className={classes.textarea}/>
        </div>
    </section>
);

export default injectSheet(styles)(Card)
