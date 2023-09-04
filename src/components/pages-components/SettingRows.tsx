import { FormControlLabel, Grid, Paper, PaperProps, Stack, Switch, SwitchProps, Typography, styled, useTheme } from "@mui/material";


const StyledPaper = styled(Paper)(({ theme }) => ({

    minHeight: 76,
    width: '100%',
    backgroundColor: theme.palette.primary.grey.riverstone,
    border: '1px solid',
    borderRadius: theme.spacing(1),
    borderColor:theme.palette.primary.system.border


}))

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 56,
    height: 30,
    padding: theme.spacing(1),
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
          
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
    
        color: '#33cf4d',
        border: '6px solid #fff',
        
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 700,
      }),
    },
  }));

type Props = PaperProps & {
    title: string;
    subTitle?: string;
    defaultChecked:boolean;
    onChecked: (isChecked: boolean) => void;

}



export default function SomsSettingRows({ title, subTitle, defaultChecked,onChecked, ...other }: Props) {

    const theme = useTheme()
    return (

        <StyledPaper {...other}>
            <Grid container   
            direction="row"
  justifyContent="center"
  alignItems="center">
                <Grid item xs={10}>
                    <Stack sx={{padding:2}} spacing={1}>
                        <Typography variant="body2">{title}</Typography>
                        {subTitle && <Typography variant="subtitle1" sx={{color:theme.palette.primary.grey[100]}}>{subTitle}</Typography>}
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                    <IOSSwitch sx={{ m: 1 }} defaultChecked={defaultChecked} />
                    </Stack>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}