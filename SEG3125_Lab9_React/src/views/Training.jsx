import React from 'react';
import beginnerImg from "../assets/BtrainingCard.jpeg"
import advancedImg from "../assets/AtrainingCard.jpeg"
import CardDisplay from '../components/CardDisplay';
import {withTranslation} from "react-i18next";

import { 
    TrainingContainer, 
    TrainingTitleContainer,
    TrainingTitle,
    TrainingDesc,
    TrainingLearnCard,
    CardContainer,
} from '../Styles/TrainingItems';

const projectItems = [
    {
        title: "Beginner",
        img: beginnerImg,
        description: "Beginner Basketballa",
        url: "/beginner",
        color: "#00897b",
    },
    {
        title: "Advanced",
        img: advancedImg,
        description: "Advanced Basketballa",
        url: "/advanced",
        color: "#8A2BE2",
    },
]

const Training = ({t}) => {
    return(
        <TrainingContainer>
            <TrainingTitleContainer>
                <TrainingTitle>
                    {t("Training")}
                </TrainingTitle>
                    <TrainingDesc>
                        {t("TrainingDesc")}
                    </TrainingDesc>
                    <TrainingLearnCard>{t("LearnMoreCard")}</TrainingLearnCard>
            </TrainingTitleContainer>
            <CardContainer>
                {CardDisplay(projectItems)}
            </CardContainer>
        </TrainingContainer>
    )
}

export default withTranslation()(Training)