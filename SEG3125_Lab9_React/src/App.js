import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './views/About';
import Training from './views/Training';
import Reviews from './views/Reviews';
import Courts from './views/Courts';
import NavBar from './components/NavBar';
import Home from './views/Home';
import ballLogo from './assets/balllogo.png'

import Beginner from './breadviews/Beginner';
import Advanced from './breadviews/Advanced';

import BDribbling from './breadviews/BeginnerSkills/BDribbling';
import BPassing from './breadviews/BeginnerSkills/BPassing';
import BShooting from './breadviews/BeginnerSkills/BShooting';
import ADribbling from './breadviews/AdvancedSkills/ADribbling';
import APassing from './breadviews/AdvancedSkills/APassing';
import AShooting from './breadviews/AdvancedSkills/AShooting';
import NavIcons from './components/NavIcons';
import Submission from './components/Submission';


const OuterBackground = styled.div`
  height: 100vh;
  /* background: cover; */
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #981717;
  height: 100px;
  z-index: 1;
  padding: 0 100px;
`;

const LogoContainer = styled.div`
  float: left;
  color: white;
`;

const Logo = styled.div`
  color: white;
  font-family: "Centra No2",sans-serif;
  margin-top: 25px;
  /* padding-left: 50px; */
  display: flex;
  flex-direction: row;
`

const NavMenuContainer = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
`;

const LogoText = styled.h2`
  font-family: "Centra No2",sans-serif;
  font-size: 38px;
  margin-top: 0;
  margin-left: 5px;
`

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

function App() {
  return (
    <OuterBackground>
      <Router>
        <NavbarContainer>
          <LogoContainer>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Logo><LogoImg src={ballLogo}/> <LogoText>OTTAHoops</LogoText></Logo>
            </Link>
          </LogoContainer>
          <NavMenuContainer>
            <NavBar />
            <NavIcons/>
          </NavMenuContainer>
        </NavbarContainer>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/training' component={Training}/>
              <Route path='/courts' component={Courts}/>
              <Route path='/reviews' component={Reviews}/>
              <Route path='/beginner' component={Beginner}/>
              <Route path='/advanced' component={Advanced}/>
              <Route path='/bdribbling' component={BDribbling}/>
              <Route path='/bpassing' component={BPassing}/>
              <Route path='/bshooting' component={BShooting}/>
              <Route path='/adribbling' component={ADribbling}/>
              <Route path='/apassing' component={APassing}/>
              <Route path='/ashooting' component={AShooting}/>
              <Route path='/submission' component={Submission}/>
            </Switch>
      </Router>
    </OuterBackground>
  );
}

export default App;
