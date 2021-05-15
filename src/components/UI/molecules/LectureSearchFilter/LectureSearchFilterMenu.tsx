import React from 'react';
import { useStores } from '@/stores';
import { LectureSearchFilter } from './LectureSearchFilter';

const LectureSearchFilterMenu = (): JSX.Element => {
  const { lectureInfoStore } = useStores();

  const majorSelectMenuProps = {
    menuLabel: '개설학부',
    menus: [
      { id: 0, title: '컴퓨터공학부', value: 0 },
      { id: 1, title: '디자인ㆍ건축공학부', value: 1 },
      { id: 2, title: '기계공학부', value: 2 },
      { id: 3, title: '메카트로닉스공학부', value: 3 },
      { id: 4, title: '전기ㆍ전자ㆍ통신공학부', value: 4 },
      { id: 5, title: '에너지신소재화학공학부', value: 5 },
      { id: 6, title: '산업경영학부', value: 6 },
      { id: 7, title: '교양학부', value: 7 },
      { id: 8, title: 'HRD학과', value: 8 },
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedDepartment(value);
    },
  };

  const daySelectMenuProps = {
    menuLabel: '요일',
    menus: [
      { id: 0, title: '월', value: 0 },
      { id: 1, title: '화', value: 1 },
      { id: 2, title: '수', value: 2 },
      { id: 3, title: '목', value: 3 },
      { id: 4, title: '금', value: 4 },
      { id: 5, title: '토', value: 5 },
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedDay(value);
    },
  };

  const gradeSelectMenuProps = {
    menuLabel: '학점',
    menus: [
      { id: 0, title: '1학점', value: 0 },
      { id: 1, title: '2학점', value: 1 },
      { id: 2, title: '3학점', value: 3 },
      { id: 3, title: '4학점', value: 4 },
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedCredit(value);
    },
  };

  const startTimeSelectMenuProps = {
    menuLabel: '시간',
    onSelectMenuChange: (value: number) => {
      lectureInfoStore.state.searchWord(null);
      let time = value;
      if (time === 720) time = 0;
      if (time === 1440) time = 720;
      lectureInfoStore.state.selectedStartTime(time);
    },
  };

  const endTimeSelectMenuProps = {
    menuLabel: '시간',
    onSelectMenuChange: (value: number) => {
      lectureInfoStore.state.searchWord(null);
      let time = value;
      if (time === 720) time = 1440;
      if (time === 1440) time = 720;
      lectureInfoStore.state.selectedEndTime(time);
    },
  };

  return (
    <LectureSearchFilter
      majorSelectMenu={majorSelectMenuProps}
      daySelectMenu={daySelectMenuProps}
      gradeSelectMenu={gradeSelectMenuProps}
      startTimeSelectMenu={startTimeSelectMenuProps}
      endTimeSelectMenu={endTimeSelectMenuProps}
    />
  );
};

export { LectureSearchFilterMenu };
