import React from 'react';
import { Link } from 'react-router-dom';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import { 
    ListContainer,
    List,
 } from '../Styles/NavBarItems';


const NavbarData = [
    {
        title: 'About',
        path: '/about',
    //   icon: <AiIcons.AiFillHome />,
        color: "#F796AE"
    },
    {
        title: 'Training',
        path: '/training',
    //   icon: <IoIcons.IoIosBook />,
        color: "#00A86B"
    },
    {
        title: 'Courts',
        path: '/courts',
    //   icon: <IoIcons.IoIosCloudUpload/>,
        color: "#BB86FC"
    },
    {
        title: 'Reviews',
        path: '/reviews',
    // icon: <IoIcons.IoIosPaper />,
        color: "#84C9FB",
    },
]

const renderNavBarLinks = () => {
    return NavbarData.map((item, index) => {
        return (
        <ListContainer>
            <List key={index} >
                <Link to={item.path} target={item.target}>
                {item.icon}<br/>
                <span style={{color:"white"}}>{item.title}</span>
                </Link>
            </List>
        </ListContainer>
        )
    })
}

const NavBar = () => {
    return (
        <>
            <List >
                {renderNavBarLinks()}
            </List>
        </>
    )
}

export default NavBar;