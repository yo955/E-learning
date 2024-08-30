import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css'; 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Subscripe from './components/Subscripe';
import SwiperComponent from './components/Swiber'; 
import CardSection from './components/CardSection';
import Materials from './components/Materials';
import SelectTextFields from './components/SelectTextFields';
import Study from './components/Study';
// import HorizontalScroll from './components/HorizontalScroll';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [myMode, setMymode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  useEffect(() => {
    // رسوم متحركة لـ .fade-up
    gsap.fromTo(
      '.fade-up',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.fade-up',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // رسوم متحركة لـ .slide-in
    gsap.fromTo(
      '.slide-in',
      { x: -100 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.slide-in',
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar setMymode={setMymode} />
      <Header className="fade-up" /> 
      <Subscripe className="slide-in" /> 
      <SwiperComponent />
      {/* <HorizontalScroll/> */}
      <CardSection/>
      <Materials/>
      <SelectTextFields/>
      <SwiperComponent/>
      <Study/>
    </ThemeProvider>
  );
}

export default App;
