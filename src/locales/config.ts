// @mui
import { enUS, frFR, zhCN, viVN, arSD,trTR } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'Turkish',
    value: 'tr',
    systemValue: trTR,
    icon: '/assets/icons/flags/ic_flag_tr.svg',
  },
  {
    label: 'Arabic (Sudan)',
    value: 'ar',
    systemValue: arSD,
    icon: '/assets/icons/flags/ic_flag_sa.svg',
   },
  // {
  //   label: 'Vietnamese',
  //   value: 'vn',
  //   systemValue: viVN,
  //   icon: '/assets/icons/flags/ic_flag_vn.svg',
  // },
  // {
  //   label: 'Chinese',
  //   value: 'cn',
  //   systemValue: zhCN,
  //   icon: '/assets/icons/flags/ic_flag_cn.svg',
  // },
];

export const defaultLang = allLangs[0]; // English
