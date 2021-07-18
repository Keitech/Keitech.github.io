import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import aDribbleimg from '../../assets/Adribbling.jpeg';
import Button from '@material-ui/core/Button';
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


const ADribbling = ({t}) => {
    return(
        <SkillsContainer>
            <SkillsBg>
                <SkillsHeroBg src={aDribbleimg}/>
            </SkillsBg>
            <BreadcrumbContainer >
                <Breadcrumbs aria-label="breadcrumb" style={{color: "white", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <Link to="/advanced" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("Advanced")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText style={{textDecoration:"none",color: "whitesmoke"}}>{t("Dribbling")}</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <SkillsTextContainer style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                <SkillsImg style={{backgroundImage: `url(${aDribbleimg})`}}/>
                <SkillsInnerTextContainer>
                    <SkillsTitle>{t("AdvancedD")}</SkillsTitle>
                    <SkillsDesc>
                    {t("AdvancedDribbling")}
                    </SkillsDesc>
                    <SkillsListContainer>
                        <ul>
                            <SkillsList>Two Ball Dribbling</SkillsList>
                            <SkillsList>Wall Tossing with Smaller Balls</SkillsList>
                            <SkillsList>Cone Grabbing Dribbling</SkillsList>
                        </ul>
                        <ul>
                            <SkillsList>1 vs 1 Driving</SkillsList>
                            <SkillsList>Tight Space Dribbling</SkillsList>
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

export default withTranslation()(ADribbling)