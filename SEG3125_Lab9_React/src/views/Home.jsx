import { React } from 'react';
import { Link } from 'react-router-dom';
import BallImg from '../assets/ball1.jpeg'
import {
    HomeContainer,
    HomeHeroBg,
    HomeBg,
    HomeText,
    LearnButton,
    TextContainer
} from '../Styles/HomeItems'
import {withTranslation} from "react-i18next";

const Home = ({t}) => {
    return(
        <>
            <HomeContainer>
                <HomeBg>
                    <HomeHeroBg src={BallImg}/>
                </HomeBg>
                <TextContainer>
                    <HomeText>{t("HeroImg")}</HomeText>
                    <Link to ='/about' >
                        <LearnButton>
                            {t("LearnMore")}
                        </LearnButton>
                    </Link>
                </TextContainer>
            </HomeContainer>
        </>
        
    )
}

export default withTranslation()(Home)