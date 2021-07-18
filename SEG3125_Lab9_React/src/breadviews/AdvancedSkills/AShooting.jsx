import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import aShootingimg from '../../assets/Ashooting.jpeg'
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


const AShooting = ({t}) => {
    return(
        <SkillsContainer>
            <SkillsBg>
                <SkillsHeroBg src={aShootingimg}/>
            </SkillsBg>
            <BreadcrumbContainer >
                <Breadcrumbs aria-label="breadcrumb" style={{color: "white", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <Link to="/advanced" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("Advanced")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText style={{textDecoration:"none",color: "whitesmoke"}}>{t("Shooting")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <SkillsTextContainer style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                <SkillsImg style={{backgroundImage: `url(${aShootingimg})`}}/>
                <SkillsInnerTextContainer>
                    <SkillsTitle>{t("AdvancedS")}</SkillsTitle>
                    <SkillsDesc>
                    {t("AdvancedShooting")}
                    </SkillsDesc>
                    <SkillsListContainer>
                        <ul>
                            <SkillsList>Stop Shooting</SkillsList>
                            <SkillsList>Step Back</SkillsList>
                            <SkillsList>1 on 1 Trailing</SkillsList>
                        </ul>
                        <ul>
                            <SkillsList>Euro Step</SkillsList>
                            <SkillsList>Quick Release</SkillsList>
                            <SkillsList>Ranged Shooting</SkillsList>
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

export default withTranslation()(AShooting)