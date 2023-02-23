import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { google } from 'googleapis';

export const query = graphql`
  query {
    calendar(summary: { eq: "Pokoj 3" }) {
      childrenCalendarEvent {
        start {
          date
        }
        end {
          date
        }
      }
    }
  }
`;

const validationSchema = yup.object({
  prijezd: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  odjezd: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
});

export default function RezervationModal({ title, price }) {
  const data = useStaticQuery(query);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([null, null]);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const disabledDate = data.calendar.childrenCalendarEvent.map((event) => {
    return event.start.date;
  });
  const initialValues = {
    prijezd: '',
    odjezd: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(disabledDate);
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        onClick={handleClickOpen}
        fullWidth
      >
        Rezervovat
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        fullScreen={isMd ? false : true}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Cena: {price} Kč/noc</DialogContentText>
          <Box mt={3}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      shouldDisableDate={(day) => {
                        const currentDate = day.toISOString().split('T')[0];
                        return disabledDate.find(
                          (date) => date === currentDate,
                        );
                      }}
                      loading={false}
                      disablePast
                      label="Basic example"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Příjezd"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="prijezd"
                    fullWidth
                    value={formik.values.prijezd}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.prijezd && Boolean(formik.errors.prijezd)
                    }
                    helperText={formik.touched.prijezd && formik.errors.prijezd}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Odjezd"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="odjezd"
                    fullWidth
                    value={formik.values.odjezd}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.odjezd && Boolean(formik.errors.odjezd)
                    }
                    helperText={formik.touched.odjezd && formik.errors.odjezd}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Jméno"
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="name"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Poznámka"
                    multiline
                    rows={6}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="message"
                    fullWidth
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Button
                    sx={{ height: 54, minWidth: 150 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                  >
                    Rezervovat
                  </Button>
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Typography color="text.secondary">
                    Nezávazná rezervace, pro potvrzení rezervace Vás budeme
                    obratem kontaktovat
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Box>
                    <Typography component="p" variant="body2" align="left">
                      By clicking on "submit" you agree to our{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Privacy Policy
                      </Box>
                      ,{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Data Policy
                      </Box>{' '}
                      and{' '}
                      <Box
                        component="a"
                        href=""
                        color={theme.palette.text.primary}
                        fontWeight={'700'}
                      >
                        Cookie Policy
                      </Box>
                      .
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Zavřít</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
