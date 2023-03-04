
export default function Paper(theme) {
    return {
      MuiPaper: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.mode === "claro" && {
              backgroundColor: theme.palette.common.white,
              color: theme.palette.common.black,
              transition: "all 1s ease-in-out",
            }),
            ...(ownerState.mode === "obscuro" && {
              filter: 'invert(100%)',
              transition: "all 1s ease-in-out",
            }),
          }),
        },
      },
    };
}