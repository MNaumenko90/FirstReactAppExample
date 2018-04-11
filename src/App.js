import React, {Component} from 'react';
import injectSheet from 'react-jss';
import Card from './ChildComponent';
import CardInfo from './ChildComponentInfo';
import CardReview from './ChildComponentReview';
import UserPhoto from './assets/placeholder-team.png'

const styles = {
    root: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        margin:'0 auto',
        width:'100%',
        maxWidth:1199,
        boxSizing:'border-box',
        justifyContent:'space-between',
        '& > div': {
            padding:20,
            backgroundColor:'#cccccc',
            margin:5,
            border:'1px solid #bbbbbb',
            minWidth:300,
            textAlign:'center',
            boxSizing:'border-box',
        },
    },
    header: {
        textDecoration:'underline',
    },
    button: {
        width:'100%',
        textTransform:'capitalize',
        backgroundColor:'#081B70',
        opacity:0.7,
        color:'#fff',
        border:0,
        padding:10,
        borderRadius:10,
        outline:'none',
        cursor:'pointer',
        '&:hover': {
            opacity:1
        },
    },
};

const card = {
    photo:{UserPhoto},
    name:'User',
    surname:'SurUser'
};

const cardInfo = {
    birth:'02-07-2000',
    workPlace:'Front End Dev',
    address:'Australia',
    phone:'+7 355 355 355',
};

const review = {
    review:'Interested in donec sed odio dui? Maecenas faucibus mollis interdum. Vestibulum id ligula semper.',
};

class App extends Component {
    render() {
        const {classes} = this.props;
        console.log(card.photo.UserPhoto);
        return (
            <div className="App">
                <h1 className={classes.header}>User Card</h1>
                <div className={classes.root}>
                    <div>
                        <Card
                            photo={card.photo.UserPhoto}
                            name={card.name}
                            surname={card.surname}
                        />
                    </div>
                    <div>
                        <CardInfo
                            birth={cardInfo.birth}
                            workPlace={cardInfo.workPlace}
                            address={cardInfo.address}
                            phone={cardInfo.phone}
                        />
                    </div>
                    <div>
                        <CardReview
                            review={review.review}
                        />
                        <button className={classes.button}>send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectSheet(styles)(App)
