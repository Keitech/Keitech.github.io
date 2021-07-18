import React, {useState} from 'react';
import profilePic from '../assets/dummy.jpeg'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    TextField,
    Box,
    makeStyles,
    Snackbar
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';

import { 
    ReviewsContainer,
    ReviewsTitleContainer,
    ReviewsTitle,
    ReviewsDesc,
    CustomReviewsContainer,
    CustomReviewCardContainer,
    LeftContainer,
    ReviewImg,
    ReviewTitle,
    ReviewRating,
    RightContainer,
    ReviewText,
    DialogTitle,
    DialogDesc
} from '../Styles/ReviewItems';
import {withTranslation} from "react-i18next";


const reviewItems = [
    {
        name: "Daniel A.",
        review: "The training sessions were amazing! My 10 year old son wanted to learn basketball and OTTAHoops provided him with a lot of care and training that is just right for a 10 year old boy. Highly recommend this club.",
        rating: "5/5"
    },
    {
        name: "Michael W.",
        review: "J'ai réservé un court pour mes amis et moi pour jouer au pick-up. Nous avons réservé le court B et c'était parfait pour un petit groupe d'amis qui voulaient juste jouer au basket-ball de manière amicale et compétitive!",
        rating: "5/5"
    },
    {
        name: "Alicia Z.",
        review: "I booked an advanced shooting session for my daughter and the training was perfect for her skill level. She is an experienced basketball player and just wanted to improve on her shooting which OTTAHoops provided splendidly.",
        rating: "5/5"
    },
    {
        name: "Tom H.",
        review: "J'ai entendu parler de ce club par un ami et j'ai réservé une séance d'entraînement pour mes enfants. Mes enfants ont passé un moment phénoménal et nous attendons avec impatience une autre session la semaine prochaine !",
        rating: "5/5"
    },
];

const labels = {
    0.5: '0.5/5',
    1: '1/5',
    1.5: '1.5/5',
    2: '2/5',
    2.5: '2.5/5',
    3: '3/5',
    3.5: '3.5/5',
    4: '4/5',
    4.5: '4.5/5',
    5: '5/5',
  };

const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
});
  
const HoverRating = () => {
    const [value, setValue] = React.useState(2.5);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div>
    );
}

const ReviewsDisplay = () => {
    return reviewItems.map((item, index) => {
        return (
            <>
                <CustomReviewCardContainer>
                    <LeftContainer>
                        <ReviewImg src={profilePic} alt="alternate"/>
                        <ReviewTitle>{item.name}</ReviewTitle>
                        <ReviewRating>Rating: {item.rating}</ReviewRating>
                    </LeftContainer>
                    <RightContainer>
                    <ReviewText>
                        {item.review}
                    </ReviewText>
                    </RightContainer>
                </CustomReviewCardContainer>       
            </>
        )
    })
}

const Reviews = ({t}) => {
    const [open, setOpen] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlertOpen(false);
    };

    return(
        <ReviewsContainer>
            <ReviewsTitleContainer>
                <ReviewsTitle>{t("Reviews")}</ReviewsTitle>
                <ReviewsDesc> {t("ReviewLet")}</ReviewsDesc>
                <Button variant="contained" color="primary" onClick={() => setOpen(true)}>{t("SubmitReview")}</Button>
            </ReviewsTitleContainer>

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
                    <DialogContent>
                        <DialogTitle>{t("ReviewTell")}</DialogTitle>
                        <TextField InputProps={{
                            style: {
                                fontSize: 20
                            }
                        }} placeholder="Full Name" />
                        <h3 style={{marginBottom: 3}}>Rating:</h3>
                        {HoverRating()}
                        <DialogDesc placeholder="Tell us about your experience here!"></DialogDesc>
                        <DialogActions>
                            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)} autoFocus>Cancel</Button>
                            <Button variant="outlined" color="primary" onClick={() => {setOpen(false); setAlertOpen(true)}} autoFocus>Submit</Button>
                        </DialogActions>
                    </DialogContent>
            </Dialog>   

            <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                {t("ReviewSuccess")}
                </Alert>
            </Snackbar>

            <CustomReviewsContainer>
                {ReviewsDisplay()}
            </CustomReviewsContainer>
        </ReviewsContainer>
    )
}

export default withTranslation()(Reviews)