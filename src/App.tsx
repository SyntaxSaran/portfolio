import React, { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Text } from '@mantine/core';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
  },[])
  const theme = createTheme({
    breakpoints:{
      xs: '320px',
      sm: '476px',
      md: '640px',
      bs: '768px',
      lg: '900px',
      xl: '1024px',
      xxl: '1280px',
    },
  });
  return (
    <MantineProvider  theme={theme}>
      <Home/>
    </MantineProvider>

  );
}

export default App;
