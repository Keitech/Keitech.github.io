import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import CardDisplay from '../components/CardDisplay';
import adribblingImg from '../assets/AdribblingCard.jpeg'
import apassingImg from '../assets/ApassingCard.jpeg'
import ashootingImg from '../assets/AshootingCard.jpg'
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
        img: adribblingImg,
        description: "Beginner Basketballa",
        url: "/adribbling",
    },
    {
        title: "Passing",
        img: apassingImg,
        description: "Passing Basketballa",
        url: "/apassing",
    },
    {
        title: "Shooting",
        img: ashootingImg,
        description: "Shooting Basketballa",
        url: "/ashooting",
    },
];

const Advanced = ({t}) => {
    return (
        <LevelContainer>
            <BreadcrumbContainer>
                <Breadcrumbs aria-label="breadcrumb" style={{color: "black", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "grey"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText color="textPrimary">{t("Advanced")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <LevelDescContainer>
            {t("AdvancedDesc")}
            <LearnCardText> {t("LearnMoreCard")}</LearnCardText>
            </LevelDescContainer>
            <LevelCardsContainer>
                {CardDisplay(projectItems)}
            </LevelCardsContainer>
        </LevelContainer>
    )
}

export default withTranslation()(Advanced)