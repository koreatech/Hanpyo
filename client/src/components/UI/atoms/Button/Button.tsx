import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

enum ButtonType {
  save = 'save',
  share = 'share',
  login = 'login',
  add = 'add',
}

interface ButtonProps {
  btnType: ButtonType;
  onClick?: () => void;
  children: React.ReactChild;
}

const useStyles = makeStyles({
  save: {
    width: '136.7px',
    height: '25px',
    borderRadius: '12.5px',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '7.5px',
    },
  },
  share: {
    width: '136.7px',
    height: '25px',
    borderRadius: '12.5px',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '7.5px',
    },
  },
  login: {
    width: '119.5px',
    height: '21.5px',
    borderRadius: '4px',
    boxShadow: '0.5px 0.5px 0.5px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '11px',
    },
  },
  add: {
    width: '39.6px',
    height: '15.5px',
    boxShadow: '0 0.5px 1.5px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '6px',
    },
  },
});

const StyledButton = ({ btnType, onClick, children }: ButtonProps): JSX.Element => {
  const classes = useStyles();

  const getClassName = () => {
    return { ...classes }[btnType];
  };

  const getColor = () => (btnType === ButtonType.share ? 'secondary' : 'primary');

  return (
    <Button className={getClassName()} variant="contained" color={getColor()} onClick={onClick}>
      {children}
    </Button>
  );
};

export { StyledButton, ButtonType };
export type { ButtonProps };
