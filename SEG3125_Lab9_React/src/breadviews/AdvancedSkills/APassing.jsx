import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import apassingImg from '../../assets/Apassing.jpeg'
import Button from '@material-ui/core/Button'
import {withTranslation} from "react-i18next";

import { 
    SkillsContainer,
    SkillsBg,
    SkillsHeroBg,
    BreadcrumbContainer,
    BreadcrumbText,
    SkillsTextContainer,
    SkillsImg,
    SkillsInnerTextContainer,
    SkillsTitle,
    SkillsDesc,
    SkillsListContainer,
    SkillsList,
    BookButton
} from '../../Styles/SkillsItems';


const APassing = ({t}) => {
    return(
        <SkillsContainer>
            <SkillsBg>
                <SkillsHeroBg src={apassingImg}/>
            </SkillsBg>
            <BreadcrumbContainer >
                <Breadcrumbs aria-label="breadcrumb" style={{color: "white", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <Link to="/advanced" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("Advanced")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText style={{textDecoration:"none",color: "whitesmoke"}}>{t("Passing")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <SkillsTextContainer style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                <SkillsImg style={{backgroundImage: `url(${apassingImg})`}}/>
                <SkillsInnerTextContainer>
                    <SkillsTitle>{t("AdvancedP")}</SkillsTitle>
                    <SkillsDesc>
                    {t("AdvancedPassing")}
                    </SkillsDesc>
                    <SkillsListContainer>
                        <ul>
                            <SkillsList>Baseball</SkillsList>
                            <SkillsList>Behind The Back</SkillsList>
                            <SkillsList>Hook</SkillsList>
                        </ul>
                        <ul>
                            <SkillsList>Off the Dribble</SkillsList>
                            <SkillsList>Hand Off</SkillsList>
                        </ul>
                    </SkillsListContainer>
                    <Link to="/submission" style={{textDecoration:"none"}}>
                        <Button variant="contained" color="primary">Book Now!</Button>
                    </Link>
                </SkillsInnerTextContainer>
            </SkillsTextContainer>
        </SkillsContainer>
    )
}

export default withTranslation()(APassing)