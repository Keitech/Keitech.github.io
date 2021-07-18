import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import bpassingImg from '../../assets/Bpassing.jpeg'
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


const BPassing = ({t}) => {
    return(
        <SkillsContainer>
            <SkillsBg>
                <SkillsHeroBg src={bpassingImg}/>
            </SkillsBg>
            <BreadcrumbContainer >
                <Breadcrumbs aria-label="breadcrumb" style={{color: "white", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <Link to="/beginner" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("Beginner")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText style={{textDecoration:"none",color: "whitesmoke"}}>{t("Passing")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <SkillsTextContainer style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                <SkillsImg style={{backgroundImage: `url(${bpassingImg})`}}/>
                <SkillsInnerTextContainer>
                    <SkillsTitle>{t("BeginnerP")}</SkillsTitle>
                    <SkillsDesc>
                    {t("BeginnerPassing")}
                    </SkillsDesc>
                    <SkillsListContainer>
                        <ul>
                            <SkillsList>Chest Pass</SkillsList>
                            <SkillsList>Bounce Pass</SkillsList>
                            <SkillsList>OverHead Pass</SkillsList>
                        </ul>
                        <ul>
                            <SkillsList>Step Around Pass</SkillsList>
                            <SkillsList>Left and Right Push Pass</SkillsList>
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

export default withTranslation()(BPassing)