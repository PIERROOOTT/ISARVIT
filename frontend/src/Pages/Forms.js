import React from 'react';

import { useNavigate, Link } from "react-router-dom";
import clsx from 'clsx';


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Survey from "material-survey/components/Survey"
import html2canvas from 'html2canvas';

import urinaryPNG from "./../Source/urinary1.PNG";
import qrcodePNG from "./../Source/qrcode1.PNG";

const { jsPDF } = require("jspdf"); // will automatically load the node version



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(1),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },
    
    footer: {
      backgroundColor: '#DAE0E2',
      padding: theme.spacing(2),
      position: 'relative',
      bottom: 0,
      right: 0,
      left: 0
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    buttons : {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttongg: {
      backgroundColor: 'teal'
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const forms = require('./../Source/urinary.json')

export default function Login(){
    const classes = useStyles();
    let navigate = useNavigate();
    function createPDF(text){
        const input = document.getElementById('divToPrint');
        input.style.display = 'block';
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("urinary_andreis.pdf");
          })
        ;
    }
    return (
        <div>
            <CssBaseline />
            <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
                <AppBar position="relative" style={{backgroundColor: 'teal'}}>
                    <Toolbar>
                    <ViewListIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                        ISARVIT
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Container maxWidth="md">
                <Survey
                    form={forms}
                    autocompleteRequest={function noRefCheck() {}}
                    onFinish={answers => createPDF('hello')}
                    />
            </Container>
                <div id='divToPrint' className="mt4" style ={{
                        backgroundColor: '#FFF',
                        width: '210mm',
                        minHeight: '297mm',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding:'2rem',
                        display: 'none'
                    }}>
                    <p>ID : 123 Pr??nom : Andreis Nom : PURIM Date de naissance : 1999-07-04</p>
                    <h1 style={{textAlign:'center'}}>URINARY / SCANNER ABDOMINO-PELVIEN</h1>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={urinaryPNG}></img>
                        <img src={qrcodePNG} style={{height: '10rem'}}></img>
                    </div>
                    <hr/>
                    <p> Examen : Radiography R??alis?? le : 2021-06-05T18:04:34 Dr </p>
                    <h2>INDICATION :</h2>
                        Douleur abdominal
                    <h2>PROTOCOLE :</h2>
                        <p>Le mod??le d'appareil d'imagerie utlis?? est Scanner 3000TMAX. Il a ??l?? valid?? le 2004-12-15. Pas de d??rivation des voies urinaires mis en place au moment de
                        l'examen. Patient non fi??vreu et pas de crise clinique au moment de l'examen. Acquisition spiral??e avec injection de produit de contraste : IV centr??e sur l'??tage
                        abdomino-pelvien. DLP = 18 mGy.cm.
                        </p>
                    <h2>RESULTATS </h2>
                    <p>
                    Int??grit?? sans injection du foie, des glandes surr??nales, du pancr??as, de la rate, des ovaires et des glandes lymphatiques. Pas d'infiltrations de la v??sicule biliaire,
                    de l'appendice et du sigmo??de.<br/>
                    Pas de pneumoperitoneum d??tect??.<br/>
                    Pas d'effusion intrap??riton??ale d??tect??e<br/>
                    Duplication des voies urinaires ?? droite pour d??crire une voie urinaire 'additionnelle'.Pas de transplantation r??nale effectu??e ant??rieurement.<br/>
                    Pas d'urolithiase d??tect??e.<br/>
                    Pas de phl??bolithe pelvienne d??tect??e.<br/>
                    Nombre de lithiases d??tect??es au cours de l'examen : 2<br/><br/>
                    Bilan des lithiases :<br/>
                    Identifiant : GFSDf5s4fdg. Evolution : Stable. Lat??ralisation : Right upper pole. Location : Proximal ureter. Lithiase non coralliforme Diam??tre maximal : 176 mm
                    Densit?? : 1235 Hounsfield Distance entre la lithiase et la jonction uretero-v??sicale : 21 cm Infiltration des tissus due ?? l'urolithiase Indication d'une obstruction :
                    Major calyces dilatation Perturbation de la perfusion r??nale due ?? l'urolithiase : Non measurable Au bord du d??c??s
                    <br/><br/>
                    Identifiant : OiJ58562Rf7. Evolution : New. Lat??ralisation : Right lower pole. Location : Renal pelvis. Lithiase coralliforme Diam??tre maximal : 32 mm Densit?? : 8
                    Hounsfield Distance entre la lithiase et la jonction uretero-v??sicale : 4 cm Infiltration des tissus due ?? l'urolithiase Indication d'une obstruction : Major calyces
                    dilatation Perturbation de la perfusion r??nale due ?? l'urolithiase : Non measurable Non ??a va en fait
                    </p>
                    <h2>CONCLUSION </h2>
                    <p>Qualification des observations : Abnormal compatible with clinical description. Il n'est pas n??cessaire de faire un autre scan. Examen conseill?? : None N??cessit?? de consulter un autre m??decin : Further physician opinion advised M??decin ?? consulter : Docteur</p>
                </div>
        </div>
    )
}