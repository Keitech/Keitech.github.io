import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Card,
    CardImg,
    CardText
} from '../Styles/TrainingItems';


const CardDisplay = (projectItems) => {
    return projectItems.map((item, index) => {
        return (
            <>
                <Link style={{textDecoration:"none"}} to={item.url}>
                    <Card>
                        <CardImg src={item.img}/>
                        <CardText>{item.title}</CardText>
                    </Card>   
                </Link>     
            </>
        )
    })
}

export default CardDisplay