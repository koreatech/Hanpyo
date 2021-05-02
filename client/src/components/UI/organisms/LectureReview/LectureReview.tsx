import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  LectureReviewInfo,
  LectureReviewThumbs,
  LectureReviewHashTags,
  LectureReviewInfoProps,
  LectureReviewThumbsProps,
} from '@/components/UI/molecules';

interface LectureReviewData {
  id: number;
  infos: LectureReviewInfoProps;
  content: string;
  tags: string[];
  scores: LectureReviewThumbsProps;
}

interface LectureReviewProps {
  data: LectureReviewData;
  isMine?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

interface CSSProps {
  isMine: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ isMine }: CSSProps) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '10rem',
    boxSizing: 'border-box',
    border: `1px solid ${isMine ? theme.palette.primary.main : theme.palette.grey[300]}`,
    backgroundColor: isMine ? '#fdf6eb' : 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem',
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '25%',
  },
  body: {
    height: '45%',
  },
  content: {
    overflow: 'hidden',
    lineHeight: 1.2,
    textAlign: 'left',
    height: '3.6rem',
    textOverFlow: 'ellipsis',
    display: '-webkit-box',
    '&::-webkit-line-clamp': 3,
    '&::-webkit-box-orient': 'vertical',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  },
  bottom: {
    height: '20%',
  },
}));

const LectureReview = ({ data, isMine = false, onClick }: LectureReviewProps): JSX.Element => {
  const classes = useStyles({ isMine });

  return (
    <span className={classes.root} data-id={data.id} onClick={onClick}>
      <div className={classes.header}>
        <LectureReviewInfo
          lectureName={data.infos.lectureName}
          profName={data.infos.profName}
          rating={data.infos.rating}
          period={data.infos.period}
        />
        <LectureReviewThumbs upScore={data.scores.upScore} downScore={data.scores.downScore} />
      </div>
      <div className={classes.content}>{data.content}</div>
      <div className={classes.bottom}>
        <LectureReviewHashTags tags={data.tags} />
      </div>
    </span>
  );
};

export { LectureReview };
export type { LectureReviewProps, LectureReviewData };
