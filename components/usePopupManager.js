import { useState } from 'react';

export const usePopupManager = () => {
  const [popupActive, setPopupActive] = useState(true);
  const [regPopupActive, setRegPopupActive] = useState(true);
  const [logPopupActive, setLogPopupActive] = useState(false);

  const handlePopupClose = () => {
    setPopupActive(false);
    setRegPopupActive(false);
    setLogPopupActive(false);
  };

  const handleToReg = () => {
    setRegPopupActive(true);
    setLogPopupActive(false);
  };

  const handleToLog = () => {
    setRegPopupActive(false);
    setLogPopupActive(true);
  };

  return {
    popupActive,
    regPopupActive,
    logPopupActive,
    handlePopupClose,
    handleToReg,
    handleToLog,
  };
};
