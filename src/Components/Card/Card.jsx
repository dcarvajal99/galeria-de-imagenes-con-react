import React from "react";
/* import {Carda as CardBootst } from 'br' */
import {Card as CardBootstrap} from 'react-bootstrap'

const Card = (props) =>{

    const {tittle, desc, photo} = props;

    return(
    <CardBootstrap
    className="col-4 text-center"
    style={{  border: '1px solid black'}}>
    <CardBootstrap.Img variant="top"  src={photo} style={{ width: '100%'}}/>
        <CardBootstrap.Body>
            <CardBootstrap.Title >{tittle}</CardBootstrap.Title>
            <CardBootstrap.Text>
            {desc}
            </CardBootstrap.Text>
        </CardBootstrap.Body>
    </CardBootstrap>
        )

}

export default Card;