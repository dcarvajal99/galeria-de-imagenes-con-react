import React from "react";

const Header = (props) =>{
    const {tittle} = props;
    console.log(tittle);
    return(
        <h1 className="text-center">{tittle}</h1>
    );
}
export default Header;