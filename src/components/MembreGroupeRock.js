import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
     <a href={membre.urlWikipedia}> {membre.name}</a> <br/>
      {"("+membre.realName+")"}
    </TableCell>

    <TableCell component="th" scope="row">
      {membre.birthDate}
    </TableCell>

    <TableCell component="th" scope="row">
      {membre.begin} -> {membre.end}
    </TableCell>

    <TableCell component="th" scope="row">
      { membre.instruments.map((m, index) => {
       return (" - "+m)
      })}<br/>
      {membre.abstract}<br/>
    </TableCell>

    <TableCell component="th" scope="row">
      <a href={membre.urlAllmusic}  target="_blank">{membre.urlAllmusic}</a><br/>
      <a href={membre.urlEquipBoard}  target="_blank">{membre.urlEquipBoard}</a><br/>
      <a href={membre.urlDiscogs}  target="_blank">{membre.urlDiscogs}</a><br/>
      <a href={membre.urlWikidata}  target="_blank"> {membre.urlWikidata}</a><br/>
    </TableCell>

  </TableRow>
);

export default MembreGroupeRock;
