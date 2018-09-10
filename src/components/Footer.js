import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function Footer({classes, footers}) {
  return (
    <footer className={classNames(classes.footer, classes.layout)}>
      <Grid container spacing={32} justify="space-evenly">
        {footers.map(footer => (
          <Grid item xs key={footer.title}>
            <Typography variant="title" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            {footer.description.map(item => (
              <Typography key={item} variant="subheading" color="textSecondary">
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </footer>
  )
}

export default Footer;