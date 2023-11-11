import {CARD_TYPES} from '@constants/cardTypes';

export const dummyData = [
  {
    title: 'lorem',
    description: 'ipsum',
    type: CARD_TYPES.NOTE,
    date: '2023-11-11',
    uuid: 1232435542,
    category: 'freetime',
  },
  {
    title: 'lorem',
    description: 'ipsum',
    type: CARD_TYPES.MULTIPLE_TODO,
    date: '2023-11-11',
    uuid: 1232434442,
    category: 'code',
  },
  {
    title: 'lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    type: CARD_TYPES.NOTE_TASK,
    date: '2023-11-11',
    uuid: 1232444432,
    category: 'youtube',
    isFinished: false,
    duration: 4,
    endDate: '2023-11-15',
  },
  {
    title: 'lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    type: CARD_TYPES.NOTE_TASK,
    date: '2023-11-11',
    uuid: 123442432,
    category: 'link',
    isFinished: true,
    duration: 4,
    endDate: '2023-11-15',
  },
  {
    title: 'lorem',
    description: 'ipsum',
    type: CARD_TYPES.NOTE_TASK,
    date: '2023-11-11',
    uuid: 1222424232,
    category: 'social',
    isFinished: true,
    duration: 4,
    endDate: '2023-11-15',
  },
];
