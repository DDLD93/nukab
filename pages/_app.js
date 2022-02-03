import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  
    palette: {
      primary:{
        main: '#ff9800',
      }, 
      secondary: {
        main: '#004d40',
      },
    },
  
});

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
