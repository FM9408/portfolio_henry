import { alpha } from "@mui/material/styles";


export default function Button(theme) {

  return {
      MuiButton: {
          styleOverrides: {
              root: {
                  '&:hover': {
                      boxShadow: 'none'
                  }
              },
              sizeLarge: {
                  height: 48
              },
              containedInherit: {
                  color: 'inherit',
                  backgroundColor: 'inherit',
                  transition: `${theme.transitions.create(
                      ['all', 'transform'],
                      {
                          duration: theme.transitions.duration.standard,
                          easing: theme.transitions.easing.easeInOut
                      }
                  )}`,
                  boxShadow: theme.customShadows.z8,
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              },
              containedPrimary: {
                  boxShadow: theme.customShadows.primary
              },
              containedSecondary: {
                  boxShadow: theme.customShadows.secondary,
                  color: theme.palette.secondary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                  transition: 'all .5s ease-in-out',
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              },
              outlinedInherit: {
                  border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              },
              textInherit: {
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              }
          }
      }
  }
}
