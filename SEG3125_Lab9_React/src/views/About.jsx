import { React } from 'react';
import BallImg from '../assets/AtrainingCard.jpeg'
import {withTranslation} from "react-i18next";

import { 
    AboutContainer,
    AboutBg,
    AboutHeroBg,
    TextContainer,
    AboutBar,
    AboutTitle,
    TeamImg,
    AboutTextContainer,
    AboutText
} from '../Styles/AboutItems';

const About = ({t}) => {
    return(
        <AboutContainer>
            <AboutBg>
                <AboutHeroBg src={BallImg}/>
            </AboutBg>
            <AboutBar>
                <AboutTitle>{t("About")}</AboutTitle>
            </AboutBar>
            <TextContainer>
                <TeamImg></TeamImg>
                <AboutTextContainer>
                    <AboutText>
                    {t("AboutText")}
                    </AboutText>
                    <AboutText>
                        {t("AboutText2")}
                    </AboutText>
                </AboutTextContainer>
            </TextContainer>
        </AboutContainer>
    )
}

export default withTranslation()(About)