import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import bDribbleimg from '../../assets/Bdribble.jpeg'
import Button from '@material-ui/core/Button'
import { withTranslation } from 'react-i18next';

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


const BDribbling = ({t}) => {
    return(
        <SkillsContainer>
            <SkillsBg>
                <SkillsHeroBg src={bDribbleimg}/>
            </SkillsBg>
            <BreadcrumbContainer >
                <Breadcrumbs aria-label="breadcrumb" style={{color: "white", fontSize: 30}}>
                    <Link to="/training" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("TrainingBread")}</BreadcrumbText>
                    </Link>
                    <Link to="/beginner" style={{textDecoration:"none",color: "#DCDCDC"}}>
                       <BreadcrumbText>{t("Beginner")}</BreadcrumbText>
                    </Link>
                    <BreadcrumbText style={{textDecoration:"none",color: "whitesmoke"}}>Dribbling</BreadcrumbText>
                </Breadcrumbs>
            </BreadcrumbContainer>
            <SkillsTextContainer style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
                <SkillsImg style={{backgroundImage: `url(${bDribbleimg})`}}/>
                <SkillsInnerTextContainer>
                    <SkillsTitle>{t("BeginnerD")}</SkillsTitle>
                    <SkillsDesc>
                    {t("BeginnerDribble")}
                    </SkillsDesc>
                    <SkillsListContainer>
                        <ul>
                            <SkillsList>Dribbling Stance</SkillsList>
                            <SkillsList>Ball Control</SkillsList>
                            <SkillsList>No Looking Dribbling</SkillsList>
                        </ul>
                        <ul>
                            <SkillsList>High Low Dribbling</SkillsList>
                            <SkillsList>Between the Legs</SkillsList>
                            <SkillsList>One on One</SkillsList>
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

export default withTranslation()(BDribbling)