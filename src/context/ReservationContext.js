import React, { useState, useContext, createContext } from 'react';

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ReservationContext.Provider value={{ open, handleClickOpen, handleClose }}>
      {children}
    </ReservationContext.Provider>
  );
}
