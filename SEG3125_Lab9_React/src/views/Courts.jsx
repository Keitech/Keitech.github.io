import React, { useState } from 'react';
import { 
    Dialog,
    DialogActions,
    DialogContent,
    Button
} from '@material-ui/core'
import courta from '../assets/courta.jpeg';
import courtb from '../assets/courtb.jpeg';
import courtc from '../assets/courtc.jpeg';

import { 
    Card,
    CardImg,
    CardText,
    CardLocation,
} from '../Styles/TrainingItems';

import { 
    CourtsContainer, 
    CourtsTitleContainer,
    CourtsTitle,
    CourtsDesc,
    CourtsCardText,
    CardContainer,
    ModalTitle,
    ModalDescription,
} from '../Styles/CourtsItems';
import {withTranslation} from "react-i18next";

const projectItems = [
    {
        title: "Court Brewer",
        location: "100 Brewer Way, Ottawa",
        description: "Court Brewer is the biggest court we own. It is mainly used for beginner training and development. All players are asked to keep the court clean and undamaged. Please email `JustinHavoc@ottahoops.com` for more details on booking courtA.",
        img: courta,
    },
    {
        title: "Court Range",
        location: "25 Range Rd, Ottawa",
        description: "Court Range is an indoor full court. It contains more training equipment that can be brought out from the inventory at the back of the gym. All players are asked to keep the court clean and undamaged. Please email `AliciaDevo@ottahoops.com` for more details on booking courtB.",
        img: courtb,
    },
    {
        title: "Court Carling",
        location: "2805 Carling Ave, Ottawa",
        description: "Court Carling is a larger and wider full court mainly held for advanced training as more space is needed. All players are asked to keep the court clean and undamaged. Please email `JamesProwler@ottahoops.com` for more details on booking courtC.",
        img: courtc,
    }
]

const CardDisplay = () => {
    const [open, setOpen] = useState(false);
    const [cardID, setCardID] = useState(0);


    return projectItems.map((item, index) => {
        return (
            <>
                <Card onClick={() => {setOpen(true); setCardID(index);}} key={index}>
                    <CardImg src={item.img}/>
                    <CardText>{item.title}</CardText>
                    <CardLocation>{item.location}</CardLocation>
                </Card>  

                <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
                    <DialogContent>
                        <ModalTitle>{projectItems[cardID].title}</ModalTitle>
                        <ModalDescription>
                        {projectItems[cardID].description}
                        </ModalDescription>
                        <DialogActions>
                            <Button variant="outlined" color="primary" onClick={() => setOpen(false)} autoFocus>Okay</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>    
            </>
        )
    })
}

const Courts = ({t}) => {
    return (
        <CourtsContainer>
            <CourtsTitleContainer>
                <CourtsTitle>
                    {t("COURTS")}
                </CourtsTitle>
                <CourtsDesc>
                    {t("CourtsDesc")}
                </CourtsDesc>
                <CourtsCardText> {t("LearnMoreCard")}</CourtsCardText>
            </CourtsTitleContainer>
            <CardContainer>
                {CardDisplay()}
            </CardContainer>
        </CourtsContainer>
    )
}

export default withTranslation()(Courts)