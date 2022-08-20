import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";



function Copyright() {
  return (





    
    <Typography variant="body2" color="textSecondary" align="center" >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Xflex Clothing Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
   
    padding: theme.spacing(6),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
       Xflex Clothing Store 
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Sri Lanka's largest online platform
      </Typography>
      <Copyright />
    </footer>
  );
}
