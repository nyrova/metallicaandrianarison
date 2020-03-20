import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./TestMaterialUI.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Location from "./Location";
import Recordlabel from "./Recordlabel";
import Labels from "./Labels";
import Urls from "./Urls";
import Names from "./Names";
import Album from "./Album";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const GroupeRock = () => {
}

const useStyles = makeStyles({

  root1: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 100,
  },
  table: {
    minWidth: 650
  },
  heading: {
    
  },
  media: {
    height: 340,
  },
});


export default function TestMaterialUI() {
  const classes = useStyles();

  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));

  let locations = metallica.locationInfo.map((m, index) => (
    <Location loc={m} key={index} />
  ));

  let reclabels = metallica.recordLabel.map((m, index) => (
    <Recordlabel loc={m} key={index} />
  ));

  let labs = metallica.labels.map((m, index) => (
    <Labels loc={m} key={index} />
  ));

  let albums = metallica.albums.map((m, index) => (
    <Album alb={m} key={index} />
  ));

  let urls = metallica.urls.map((m, index) => (
    <Urls loc={m} key={index} />
  ));

  let names = metallica.nameVariations.map((m, index) => (
    <Names loc={m} key={index} />
  ));

  return (

    <Card>
    <div  align="center">
    <div className={classes.root}>
      <div>
        <CardMedia style={{width:400}}
          className={classes.media}
          image={metallica.picture.big}
          title="Metallica"
        />
        <CardContent style={{width:800}}>
          <Typography gutterBottom variant="h5" component="h2">
          {metallica.name}
          </Typography>

          <Typography variant="body1" component="p">
          {metallica.abstract}
          </Typography>

    
         
        </CardContent>
      </div>
     
    </div>
    </div>

    <div  align="center" className="card1">

    <div className={classes.root} style={{width:1040}}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Infos generales</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            


    <Typography>
           <TableContainer component={Paper} style={{width:1000}}>
             <Table className={classes.table} aria-label="simple table">
                <TableRow>
                  <TableCell>Genre: </TableCell>
                  <TableCell>- {metallica.genres[0]}, {metallica.genres[1]}</TableCell>
                </TableRow>
              <TableBody>
              <TableRow>
                  <TableCell>Also called: </TableCell>
                  <TableCell>{names}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Localisation: </TableCell>
                  <TableCell>{locations}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Record Label</TableCell>
                  <TableCell>{reclabels}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Labels</TableCell>
                  <TableCell>{labs}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>URLs</TableCell>
                  <TableCell>{urls}</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </TableContainer>
          </Typography>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Membres</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <TableContainer component={Paper} style={{width:1000}}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Membre<br/>(Noms complets)</TableCell>
                <TableCell>Date de naissance</TableCell>
                <TableCell>Années actives</TableCell>
                <TableCell>Instruments et a propos </TableCell>
                <TableCell>URLS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {listeDesMembres}
            </TableBody>
          </Table>
        </TableContainer>
        </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Albums</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            
          <TableContainer component={Paper} style={{width:1000}}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Album</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Duree</TableCell>
                <TableCell>DeezerFans</TableCell>
                <TableCell align="center">Chansons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

                             
            {albums}
                

            </TableBody>
          </Table>
        </TableContainer>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>

        </div>

    </Card>
  );
}
