import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { google } from 'googleapis';
import 'dayjs/locale/cs';

export const query = graphql`
  query {
    allCalendar: allCalendar {
      nodes {
        id
        children {
          ... on CalendarEvent {
            end {
              date
            }
            start {
              date
            }
          }
        }
      }
    }
    calendar: calendar(summary: { eq: "Pokoj 3" }) {
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
    .date()
    .default(() => new Date())
    .min(
      dayjs().add(-1, 'day'),
      ({ min }) => `Datum musí být více než ${dayjs(min).format('DD.MM.YYYY')}`,
    )
    .typeError('Špatný formát data, DD.MM.YYYY')
    .required('Zadejte datum příjezdu'),
  odjezd: yup
    .date()
    .default(() => new Date())
    .min(
      dayjs(),
      ({ min }) => `Datum musí být více než ${dayjs(min).format('DD.MM.YYYY')}`,
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
  tel: yup
    .number()
    .typeError('Vyplňte číslo')
    .positive('Číslo nesmí být záporné')
    .integer('Číslo nesmí obsahovat tečku')
    .required('Vyplňte číslo'),
  message: yup.string().trim(),
});

export default function RezervationModal({ title, price, calendarId }) {
  dayjs.extend(isBetween);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([null, null]);
  const disabledDates = [];

  const data = useStaticQuery(query);

  const filtredCalendars = data.allCalendar.nodes.filter((item) =>
    calendarId.includes(item.id),
  );

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const getRangeDates = (startDate, endDat) => {
    const currentDate = new Date(startDate);
    const endDate = new Date(endDat);
    endDate.setDate(endDate.getDate() - 2);

    while (currentDate < endDate) {
      const date = new Date(currentDate);
      disabledDates.push(date.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  };

  filtredCalendars.map((calendar) => {
    calendar.children.map((event) => {
      const startDate = new Date(event.start.date);
      const endDate = new Date(event.end.date);
      getRangeDates(startDate, endDate);
    });
  });

  const initialValues = {
    prijezd: null,
    odjezd: null,
    name: '',
    tel: null,
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    alert(
      JSON.stringify(
        {
          ...values,
          prijezd: dayjs(values.prijezd).format('DD.MM.YYYY'),
          odjezd: dayjs(values.odjezd).format('DD.MM.YYYY'),
        },
        null,
        2,
      ),
    );
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

  const checkDates = (start, end) => {
    const currentDate = new Date(start);
    const endDate = new Date(end);
    while (currentDate <= endDate) {
      const date = new Date(currentDate);
      const dates = date.toISOString().split('T')[0];
      disabledDates.includes(dates) === true &&
        formik.setFieldError('odjezd', 'nepovolena hodnota');
      currentDate.setDate(currentDate.getDate() + 1);
    }
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
        <DialogTitle>
          <Box display="flex" justifyContent={'space-between'}>
            {title}{' '}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Cena: {price} Kč/noc</DialogContentText>
          <Box mt={3}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    '& .Mui-disabled': {
                      textDecoration: 'line-through !important',
                      backgroundColor: 'red !important',
                      color: 'white !important',
                    },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="cs"
                  >
                    <StaticDatePicker
                      displayStaticWrapperAs={'desktop'}
                      readOnly
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
                      renderInput={(params) => <TextField {...params} />}
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
                        formik.setFieldValue('prijezd', dayjs(newValue), true);
                        if (
                          dayjs(newValue).isSameOrAfter(
                            dayjs(formik.values.odjezd, 'day'),
                          )
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
                        formik.setFieldValue('odjezd', dayjs(newValue), true);
                        if (
                          dayjs(newValue).isSameOrBefore(
                            dayjs(formik.values.prijezd, 'day'),
                          )
                        ) {
                          formik.setFieldValue(
                            'prijezd',
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
                    label="Tel"
                    type="text"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="tel"
                    fullWidth
                    value={formik.values.tel}
                    onChange={formik.handleChange}
                    error={formik.touched.tel && Boolean(formik.errors.tel)}
                    helperText={formik.touched.tel && formik.errors.tel}
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
                    sx={{ height: 54 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    type="submit"
                    fullWidth
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
              </Grid>
            </form>
          </Box>
        </DialogContent>
        <DialogActions>
          <Typography
            component="p"
            variant="body2"
            align="center"
            sx={{ paddingY: 1 }}
          >
            Odesláním formuláře souhlasíte se{' '}
            <Box
              component={Link}
              to="/zpracovaniOsobnichUdaju"
              color={theme.palette.text.primary}
              fontWeight={'700'}
            >
              Zpracováním osobních údajů
            </Box>
            ,{' '}
            {/*  <Box
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
                      </Box> */}
            .
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  );
}
