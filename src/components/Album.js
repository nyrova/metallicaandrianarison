import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./Album.css";
import metallica from "../data/mettalica";
import CardMedia from '@material-ui/core/CardMedia';
import BlockIcon from '@material-ui/icons/Block';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GetAppIcon from '@material-ui/icons/GetApp';

const Album = ({ alb }) => (
    
      <TableRow>
    <TableCell component="th" scope="row">
        <h4>{alb.title}</h4> ( {alb.publicationDate} ) <br/> <a href={alb.urlWikipedia}><ZoomInIcon></ZoomInIcon>Wiki</a>
        <a href={alb.urlDeezer}><ZoomInIcon></ZoomInIcon>Deezer</a>
        {(() => {
            if(alb.cover!= undefined){
           return  <a target="_blank" href={alb.cover.medium}><CardMedia style={{width:30}} style={{height:160}}  image={alb.cover.medium} title="Contemplative Reptile"/></a>;}
           else{
           return <div><BlockIcon ></BlockIcon></div>
           }
        })()}

    </TableCell>
    <TableCell component="th" scope="row">
        {alb.genre} 
    </TableCell>
    <TableCell component="th" scope="row">
        {alb.length} 
    </TableCell>
    <TableCell component="th" scope="row">
        {alb.deezerFans} 
    </TableCell>
    <TableCell component="th" scope="row">
    <List  class="root1">
         
            { alb.songs.map((m, index) => {
             return <ListItem> 
             <a href={m.preview}><GetAppIcon align="right"></GetAppIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={m.urlSong}  target="_blank"> {m.title}</a> ({Math.trunc(m.length/60.)}:{m.length%60})
            
          </ListItem>
             })}
      
    </List>
    </TableCell>
    </TableRow>


);

export default Album;
