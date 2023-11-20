import {
  cyan,
  deepOrange,
  deepPurple,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";


const theme = extendTheme({
  _white: "#38bdf8",
  _sky_500: "#0ea5e9",
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": { padding: 12 },
          // overflowY: "auto",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            // backgroundColor: "red",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: (theme) => theme._white,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // height: "36px",
          color: 'black', //color text
          fontSize: "0.875rem",
          // màu border ban đầu
          fieldset: {
            borderColor: theme._white,
          },
          "&.MuiOutlinedInput-root": {
            // khi hover vẫn giữ màu ban đầu và thêm borderWidth
            "&:hover fieldset": {
              borderColor: theme._white,
              borderWidth: "1.5px !important",
            },
            // khi bỏ hover  vẫn giữ màu
            "&.Mui-focused fieldset": {
              borderColor: theme._white,
            },
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme._white,
          fontSize: "0.875rem",
          "&.Mui-focused": {
            color: theme._white,
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.primary,
    //       borderColor: theme._white,
    //       borderWidth: "0.5px",
    //       textTransform: "none",
    //       "&:hover": { borderColor: theme._white,borderWidth: "1px" },
    //     }),
    //   },
    // },
  },
});


// note

{/* 
// css input text-field in material
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: '50ch' },
  // color label
  '& .MuiInputLabel-root': {
    color: (theme) => (theme._shop_main + '!important')
  }
}}
noValidate
autoComplete="off"
>
<TextField size='medium' id="outlined-basic"
  sx={{
    '& .MuiInputBase-input': {
      // height: "13px",
      // text-color
      color: (theme) => (theme._shop_main + '!important'),
    },
    // border
    fieldset: {
      borderColor: (theme) => (theme._shop_main + '!important'),
    },
    // border khi focus
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: (theme) => (theme._shop_main + '!important'),
    },
    // border khi hover
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: (theme) => (theme._shop_main + '!important'),
      borderWidth: "1.5px !important",
    }
  }}
  label="Card Number" variant="outlined" />
</Box> */}
export default theme;
