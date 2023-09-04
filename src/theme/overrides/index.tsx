import { Theme } from '@mui/material/styles';
import Table from './Table';
export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Table(theme),
    );
  }