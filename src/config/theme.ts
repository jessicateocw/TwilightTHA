import { extendTheme } from '@chakra-ui/react';
import { tabsTheme } from '@/component/styles/Tabs';
import { switchTheme } from '@/component/styles/Switch';
import { sliderTheme } from '@/component/styles/Slider';

export const defaultThemeObject = {
  fonts: {
    body: 'PT Mono, sans-serif',
  },
  colors: {
    primary: {
      '50': '#e5e7f9',
      '100': '#bec4ef',
      '200': '#929ce4',
      '300': '#6674d9',
      '400': '#4657d1',
      '500': '#2539c9',
      '600': '#2133c3',
      '700': '#1b2cbc',
      '800': '#1624b5',
      '900': '#0d17a9'
    },
    brand: {
      '50': '#76fbcb',
    }
  },
  styles: {
    global: {
      body: {
        color: 'default',
        bg: '#07081b',
      },
    },
  },
  breakPoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
  },
  components: {
    Tabs: tabsTheme,
    Switch: switchTheme,
    Slider: sliderTheme
  },
};

export const defaultTheme = extendTheme(defaultThemeObject);
