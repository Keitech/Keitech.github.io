import React from 'react';
import * as FiIcons from 'react-icons/fi';
import Language from './Language';
import {withTranslation} from "react-i18next";

import {
    NavIconsContainer,
    DialogContainer,
    DialogTitle,
    DialogButtonContainer,
    FaqTitle,
    FaqDesc
} from "../Styles/NavIconsItems"
import { 
    Dialog,
    DialogContent,
    DialogActions,
    Button
}from '@material-ui/core'

class NavIcons extends React.Component {

    state = {
        open: false,
        openGlobe: false,
        openFaq: false,
        language: "en"
     }

    closeContent(){
        this.setState({ open: false, openGlobe: false, openFaq: false });
    }

    openChangeLanguageDialog(){
        this.setState({ openGlobe: true });
     }
  
    changeLanguage(language){
        Language.changeLanguage(language);
    }

    openFaqDialog(){
        this.setState({ openFaq: true })
    }

    render(){
        const { t } = this.props;
        return( 
            <>
                <NavIconsContainer>
                    <FiIcons.FiHelpCircle style={{margin: "0 20", cursor:"pointer"}} onClick={() => {this.openFaqDialog()}}/>
                    <FiIcons.FiGlobe style={{cursor:"pointer"}} onClick={() => {this.openChangeLanguageDialog()}}/>
                </NavIconsContainer>

                <Dialog open={this.state.openGlobe} onClose={() => {this.closeContent()}}>
                <DialogContainer>
                    <DialogContent>
                        <DialogTitle>{t("Change_Language")}</DialogTitle>
                        <DialogButtonContainer>
                            <Button style={{margin: "0 10px", fontSize: "1.25rem"}} variant="contained" color="primary" onClick={() => {this.changeLanguage('en'); this.closeContent()}}>English</Button>
                            <Button style={{margin: "0 10px", fontSize: "1.25rem"}} variant="contained" color="primary" onClick={() => {this.changeLanguage('fr'); this.closeContent()}}>Français</Button>
                        </DialogButtonContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={() => {this.closeContent()}} autoFocus>{t("Cancel")}</Button>
                    </DialogActions>
                </DialogContainer>
                </Dialog>

                <Dialog open={this.state.openFaq} onClose={() => {this.closeContent()}}>
                    <DialogContent>
                        <h1>HELP</h1>
                        <FaqTitle>{t("About")}</FaqTitle>
                        <FaqDesc>{t("HelpAbout")}</FaqDesc>
                        <FaqTitle>{t("Training")}</FaqTitle>
                        <FaqDesc>{t("HelpTraining")}</FaqDesc>
                        <FaqTitle>{t("Courts")}</FaqTitle>
                        <FaqDesc>{t("HelpCourts")}</FaqDesc>
                        <FaqTitle>{t("Reviews")}</FaqTitle>
                        <FaqDesc>{t("HelpReviews")}</FaqDesc>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={() => {this.closeContent()}} autoFocus>{t("OKAY")}</Button>
                    </DialogActions>
                </Dialog>
            </>
        )}
}

export default withTranslation()(NavIcons);