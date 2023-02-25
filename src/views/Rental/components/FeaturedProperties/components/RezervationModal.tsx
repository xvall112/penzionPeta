import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
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
import isBetween from 'dayjs/plugin/isBetween';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { google } from 'googleapis';
import 'dayjs/locale/cs';

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

export default function RezervationModal({ title, price }) {
  dayjs.extend(isBetween);
  const data = useStaticQuery(query);
  const disabledDates = [];

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([null, null]);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const getRangeDates = (startDate, endDate) => {
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const date = new Date(currentDate);
      disabledDates.push(date.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  };

  const checkDates = (start, end) => {
    const currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      const dates = new Date(currentDate.toISOString().split('T')[0]);
      return disabledDates.find((date) => date === dates) ? true : false;
    }
  };

  data.calendar.childrenCalendarEvent.map((event) => {
    const startDate = new Date(event.start.date);
    const endDate = new Date(event.end.date);
    getRangeDates(startDate, endDate);
  });

  const initialValues = {
    prijezd: dayjs(),
    odjezd: null,
    name: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = yup.object({
    prijezd: yup
      .date()
      .default(() => new Date())
      .min(
        dayjs().add(-1, 'day'),
        ({ min }) =>
          `Datum musí být více než ${dayjs(min).format('DD.MM.YYYY')}`,
      )
      .typeError('Špatný formát data, DD.MM.YYYY')
      .required('Zadejte datum příjezdu'),
    odjezd: yup
      .date()
      .default(() => new Date())
      .min(
        dayjs(),
        ({ min }) =>
          `Datum musí být více než ${dayjs(min).format('DD.MM.YYYY')}`,
      )
      .typeError('Špatný formát data, DD.MM.YYYY')
      .required('Zadejte datum příjezdu'),
    email: yup
      .string()
      .trim()
      .email('Špatný email')
      .required('Vyplňte email'),
    name: yup
      .string()
      .trim()
      .required('Vyplňte jméno'),
    message: yup.string().trim(),
  });

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
                <Grid
                  item
                  xs={6}
                  sx={{
                    '& .Mui-disabled': { textDecoration: 'line-through' },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="cs"
                  >
                    <DesktopDatePicker
                      disableHighlightToday
                      disableMaskedInput={true}
                      shouldDisableDate={(day) => {
                        const currentDate = day.toISOString().split('T')[0];
                        return disabledDates.find(
                          (date) => date === currentDate,
                        );
                      }}
                      loading={false}
                      disablePast
                      label="Příjezd"
                      value={formik.values.prijezd}
                      onChange={(newValue) => {
                        formik.setFieldValue('prijezd', newValue, true);
                        if (
                          dayjs(newValue).isAfter(dayjs(formik.values.odjezd))
                        ) {
                          formik.setFieldValue(
                            'odjezd',
                            null,
                            /* dayjs(newValue).add(+3, 'day') */
                          );
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          type="date"
                          fullWidth
                          name="prijezd"
                          error={
                            formik.touched.prijezd &&
                            Boolean(formik.errors.prijezd)
                          }
                          helperText={
                            formik.touched.prijezd && formik.errors.prijezd
                          }
                        />
                      )}
                      renderDay={(day, _value, DayComponentProps) => {
                        const isSelected =
                          dayjs(day).isSame(formik.values.prijezd, 'day') ||
                          dayjs(day).isSame(formik.values.odjezd, 'day') ||
                          dayjs(day).isBetween(
                            dayjs(formik.values.prijezd),
                            dayjs(formik.values.odjezd),
                            'day',
                          );
                        return (
                          <PickersDay
                            {...DayComponentProps}
                            selected={isSelected ? true : false}
                          />
                        );
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="cs"
                  >
                    <DesktopDatePicker
                      defaultCalendarMonth={dayjs(formik.values.prijezd)}
                      disableHighlightToday
                      shouldDisableDate={(day) => {
                        const currentDate = day.toISOString().split('T')[0];
                        return disabledDates.find(
                          (date) => date === currentDate,
                        );
                      }}
                      minDate={dayjs(formik.values.prijezd).add(+1, 'day')}
                      loading={false}
                      disablePast
                      label="Odjezd"
                      value={formik.values.odjezd}
                      onChange={(newValue) => {
                        !checkDates(formik.values.prijezd, newValue) &&
                          formik.setFieldValue('odjezd', newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          type="date"
                          fullWidth
                          name="odjezd"
                          error={
                            formik.touched.odjezd &&
                            Boolean(formik.errors.odjezd)
                          }
                          helperText={
                            formik.touched.odjezd && formik.errors.odjezd
                          }
                        />
                      )}
                      renderDay={(day, _value, DayComponentProps) => {
                        const isSelected =
                          dayjs(day).isSame(formik.values.prijezd, 'day') ||
                          dayjs(day).isSame(formik.values.odjezd, 'day') ||
                          dayjs(day).isBetween(
                            dayjs(formik.values.prijezd),
                            dayjs(formik.values.odjezd),
                            'day',
                          );
                        return (
                          <PickersDay
                            {...DayComponentProps}
                            selected={isSelected ? true : false}
                          />
                        );
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Jméno"
                    type="text"
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
