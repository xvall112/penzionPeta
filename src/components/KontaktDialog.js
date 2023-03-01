import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

import { ReservationContext } from '../context/ReservationContext';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const query = graphql`
  query {
    contentfulWeb {
      organization {
        tel
        email
        instagram
        id
      }
    }
  }
`;
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const data = useStaticQuery(query);
  const { open, handleClose } = useContext(ReservationContext);
  return (
    <div>
      <BootstrapDialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Kontakt
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <Button
              size={'large'}
              variant="contained"
              fullWidth
              component={'a'}
              href={`tel:${data.contentfulWeb.organization.tel}`}
            >
              {data.contentfulWeb.organization.tel}
            </Button>
            <Button
              size={'large'}
              variant="contained"
              fullWidth
              component={'a'}
              href={`mailto:${data.contentfulWeb.organization.email}`}
            >
              {data.contentfulWeb.organization.email}
            </Button>
            <Button
              size={'large'}
              variant="contained"
              target="_blank"
              fullWidth
              component={'a'}
              href={data.contentfulWeb.organization.instagram}
            >
              Instagram
            </Button>
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
