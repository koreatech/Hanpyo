import React from 'react';
import { Box, Typography, IconButton, Tooltip, TooltipProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

interface LectureBoxProps {
  starttime: number;
  endtime: number;
  bgcolor?: string;
  name: string;
  division?: string;
  prof: string;
}

interface CSSProps {
  columnPos: number;
  rowStartPos: number;
  rowEndPos: number;
  bgcolor?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${props.rowEndPos * 2}rem` : '4rem'),
    width: '5rem',
    left: (props: CSSProps) => `${5 + props.columnPos * 5}rem`,
    top: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${4 + props.rowStartPos * 2}rem` : '40rem'),
    boxSizing: 'border-box',
    backgroundColor: (props: CSSProps) => props.bgcolor || 'rgba(250, 244, 192)',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderTop: `2px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      boxShadow: '0 3px 4.5px 0 rgba(0, 0, 0, 0.16)',
      '& > div[class*="makeStyles-membrane"]': {
        display: 'block',
      },
      '& .MuiButtonBase-root': {
        display: 'block',
      },
    },
    '& .MuiButtonBase-root': {
      display: 'none',
      position: 'absolute',
      left: '50%',
    },
  },
  membrane: {
    display: 'none',
    position: 'absolute',
    backgroundColor: theme.palette.grey[300],
    opacity: '0.5',
    width: '100%',
    height: '100%',
  },
}));

const LectureBox = ({ starttime, endtime, bgcolor, name, division, prof }: LectureBoxProps): JSX.Element => {
  const columnPos = Math.floor(starttime / 1440);
  const rowStartPos = ((starttime % 1440) - 540) / 30;
  const rowEndPos = (endtime - starttime) / 30;
  const classes = useStyles({ columnPos, rowStartPos, rowEndPos, bgcolor });
  return (
    <Box className={classes.root}>
      <Box className={classes.membrane} />
      <Tooltip title="시간표 삭제" arrow placement="right">
        <IconButton aria-label="delete">
          <DeleteIcon style={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
      <Box>
        <Typography variant="subtitle2">{name}</Typography>
      </Box>
      <Box>
        <Typography variant="caption">{`${division || '01'} ${prof}`}</Typography>
      </Box>
    </Box>
  );
};

export { LectureBox };
