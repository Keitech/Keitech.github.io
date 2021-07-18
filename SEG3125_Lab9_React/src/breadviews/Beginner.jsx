import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import CardDisplay from '../components/CardDisplay';
import bdribblingImg from '../assets/BdribblingCard.jpeg'
import bpassingImg from '../assets/BpassingCard.jpeg'
import bshootingImg from '../assets/BshootingCard.jpeg'
import {withTranslation} from "react-i18next";

import { 

    LevelContainer,
    BreadcrumbContainer,
    BreadcrumbText,
    LevelDescContainer,
    LevelCardsContainer,
    LearnCardText
} from '../Styles/LevelItems';

const projectItems = [
    {
        title: "Dribbling",
        img: bdribblingImg,
        description: "Beginner Basketballa",
        url: "/bdribbling",
    },
    {
        title: "Passing",
        img: bpassingImg,
        description: "Passing Basketballa",
        url: "/bpassing",
    },
    {
        title: "Shooting",
        img: bshootingImg,
        description: "Shooting Basketballa",
        url: "/bshooting",
    },
];

const Beginner = ({t}) => {
    return (
        <LevelContainer>
            <BreadcrumbContainer>
                <Breadcrumbs aria-label="breadcrumb" style={{color: "black", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "grey"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText color="textPrimary">{t("Beginner")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <LevelDescContainer>
            {t("BeginnerDesc")}
            <LearnCardText> {t("LearnMoreCard")}</LearnCardText>
            </LevelDescContainer>
            <LevelCardsContainer>
                {CardDisplay(projectItems)}
            </LevelCardsContainer>
        </LevelContainer>
    )
}

export default withTranslation()(Beginner);