import React from "react";

const Footer = (props) => {
    const {text} = props
    return (<>
        <footer className="bg-dark text-light text-center">{text}</footer>
    </>)
}

export default Footer