import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Urls = ({ loc }) => (
<a href={loc}  target="_blank">     - {loc}   <br/> </a>
   
);

export default Urls;
