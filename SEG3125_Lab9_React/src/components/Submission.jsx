import React, {useState} from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import SnackBar from '@material-ui/core/SnackBar'
import { 
    SubmissionContainer, 
    SubmissionTitleContainer,
    FormContainer, 
    LeftContainer,
    RightContainer,
    InnerRightLeftContainer,
    InnerRightRightContainer,
    RadioDiv,
    RadioText,
    RadioContainer,
    SubmissionTitle, 
    SubmissionDesc,
    Form,
    ErrorsP,
    TextDiv,
    TextLabel,
    TextInput,
    ButtonDiv,
    ButtonText,
    EmailBoxText
} from '../Styles/SubmissionItems';

const Submission = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        validate
    );
    const [open, setOpen] = useState(true);
    const [openAlert, setAlertOpen] = useState(true)

    // const [successOpen, setSuccessOpen] = useState(false)

    return (
        <SubmissionContainer>
            <SubmissionTitleContainer>
                <SubmissionTitle>
                    BOOKING
                </SubmissionTitle>
                <SubmissionDesc>
                    Ready to book a session with us? Fill out the form below!
                </SubmissionDesc>
            </SubmissionTitleContainer> 
            <FormContainer>
                <Form onSubmit={handleSubmit} noValidate>
                    <LeftContainer>
                        <h2>Personal Information</h2>
                        <TextDiv >
                        <TextLabel >Full Name: </TextLabel>
                        <TextInput
                            type='text'
                            name='fullname'
                            placeholder='Ex. John Doe'
                            value={values.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <ErrorsP>{errors.fullname}</ErrorsP>}
                        </TextDiv>
                        <TextDiv>
                            <TextLabel >Email: </TextLabel>
                            <TextInput
                                type='text'
                                name='email'
                                placeholder='Ex. JohnDoe@gmail.com'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <ErrorsP>{errors.email}</ErrorsP>}
                        </TextDiv>
                        <TextDiv >
                            <TextLabel>Phone Number: </TextLabel>
                            <TextInput
                                type='text'
                                name='phone'
                                placeholder='Ex. XXX XXX XXXX'
                                value={values.phone}
                                onChange={handleChange}
                                mask="(999)-999-9999"
                                maskChar={null}
                            />
                            {errors.phone && <ErrorsP>{errors.phone}</ErrorsP>}
                        </TextDiv>
                        <h2>Date</h2>
                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue="2021-08-01T08:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                                style: {
                                    fontSize: 20
                                }
                            }}
                        />
                    </LeftContainer>
                    <RightContainer>
                        <h2 styled={{marginTop:0}}>Training Program: </h2>
                        <RadioContainer>
                        <InnerRightLeftContainer>
                        <RadioDiv>
                            <input type="radio" name="gridRadios" id="gridRadios1" value="Custom Knee Brace ~$95" defaultChecked/>
                            <RadioText htmlFor="gridRadios1">
                                Beginner Passing
                            </RadioText>
                          </RadioDiv>
                          <RadioDiv >
                            <input type="radio" name="gridRadios" id="gridRadios2" value="Custom Knee Brace ~$95"/>
                            <RadioText for="gridRadios2">
                                Beginner Shooting
                            </RadioText>
                          </RadioDiv>
                          <RadioDiv >
                            <input type="radio" name="gridRadios" id="gridRadios3" value="Custom Knee Brace ~$95"/>
                            <RadioText for="gridRadios3">
                                 Beginner Dribbling
                            </RadioText>
                          </RadioDiv>
                        </InnerRightLeftContainer>
                        <InnerRightRightContainer>
                        <RadioDiv >
                            <input type="radio" name="gridRadios" id="gridRadios4" value="Custom Knee Brace ~$95"/>
                            <RadioText for="gridRadios4">
                                Advanced Passing
                            </RadioText>
                        </RadioDiv>
                        <RadioDiv>
                            <input type="radio" name="gridRadios" id="gridRadios5" value="Custom Knee Brace ~$95"/>
                            <RadioText for="gridRadios5">
                                Advanced Shooting
                            </RadioText>
                        </RadioDiv>
                        <RadioDiv >
                            <input type="radio" name="gridRadios" id="gridRadios6" value="Custom Knee Brace ~$95"/>
                            <RadioText for="gridRadios6">
                                Advanced Dribbling
                            </RadioText>
                        </RadioDiv>
                        </InnerRightRightContainer>
                        </RadioContainer>
                        <h2>Payment</h2>
                        <TextDiv style={{marginTop:13}} >
                        <TextLabel >Card Number: </TextLabel>
                        <TextInput
                            type='text'
                            name='credit'
                            placeholder='Ex. XXXX XXXX XXXX XXXX'
                            value={values.credit}
                            onChange={handleChange}
                            mask="9999-9999-9999-9999"
                            maskChar={null}
                        />
                        {errors.credit && <ErrorsP>{errors.credit}</ErrorsP>}
                        </TextDiv>
                        <RadioContainer>
                        <InnerRightLeftContainer>
                        <TextDiv >
                        <TextLabel >CVV: </TextLabel>
                        <TextInput
                            type='text'
                            name='cvv'
                            placeholder='Ex. XXX'
                            value={values.cvv}
                            onChange={handleChange}
                            style={{width:"60%"}}
                            mask="(9 9 9)"
                            maskChar={null}
                        />
                        {errors.cvv && <ErrorsP>{errors.cvv}</ErrorsP>}
                        </TextDiv>
                        </InnerRightLeftContainer>
                        <InnerRightRightContainer>
                        <TextDiv >
                        <TextLabel >Exp: </TextLabel>
                        <TextInput
                            type='text'
                            name='exp'
                            placeholder='Ex. MM/YYYY'
                            value={values.exp}
                            onChange={handleChange}
                            style={{width:"90%"}}
                            mask="9 9 / 9 9 9 9"
                            maskChar={null}
                        />
                        {errors.exp && <ErrorsP>{errors.exp}</ErrorsP>}
                        </TextDiv>
                        </InnerRightRightContainer>
                        </RadioContainer>
                        <ButtonDiv>
                        <InnerRightLeftContainer style={{}}>
                        <input type="checkbox" id="news" onClick={() => {setOpen(!open)}} checked={open}/>
                            <EmailBoxText for="news"> Recieve Emails and Newsletters!</EmailBoxText>
                            {open == false ?
                            <Collapse in={openAlert}>
                                <Alert severity="warning"
                                style={{width:175, marginTop:15}}
                                action={
                                    <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setAlertOpen(false);
                                    }}
                                    >
                                    <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }>
                                You've unchecked your subscribtion!
                                </Alert>
                            </Collapse> : null }
                            </InnerRightLeftContainer>
                            <InnerRightRightContainer style={{display:"flex",flexDirection:"column", marginTop:10}}>
                            <Button type='submit' variant="contained" color="primary">
                                <ButtonText>Book Now!</ButtonText>
                            </Button> 
                            </InnerRightRightContainer>
                        </ButtonDiv>
                    </RightContainer> 
                </Form> 
            </FormContainer>   
        </SubmissionContainer>
    )
}

export default Submission;