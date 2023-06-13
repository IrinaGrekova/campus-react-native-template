/* eslint-disable @typescript-eslint/naming-convention */
import { ICustomTheme } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export const THEME_CONFIG: ICustomTheme = {
  colors: {
    custom: {
      backgroundColor: '#F4F5FC',
      lightText: '#94A8C7',
      primaryText: '#233A5A',
    },
    darkBlue: {
      500: '#4F7FDA',
    },

    violet: {
      100: '#CFBCFD',
      200: ' #ECDAFF',
      300: '#AB87EA',
      500: '#8B5CF6',
      600: '#B96FF7',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: '#5E678C',
        fontFamily: 'Raleway-Bold',
        size: 'lg',
      },
    },
    Input: {
      baseStyle: {
        _focus: {
          bg: '#FFFFFF',
          borderBottomColor: '#B96FF6',
          borderBottomWidth: '3',
        },
        borderRadius: 'none',
        height: '52px',
      },
      defaultProps: {
        autoCapitalize: 'none',
        bg: '#FFFFFF',
        borderBottomColor: '#D2D9F5',
        borderBottomWidth: 2,
        fontSize: 16,
        p: 2,
        variant: 'underlined',
      },
    },
    Text: {
      baseStyle: {
        color: '#233A5A',
        fontFamily: 'Raleway-Regular',
        fontSize: '14px',
      },
    },
  },
  config: {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  },
  fontConfig: {
    Raleway: {
      400: {
        normal: 'Raleway-Regular',
      },
      500: {
        normal: 'Raleway-Medium',
      },
      700: {
        normal: 'Raleway-Bold',
      },
    },
  },

  fonts: {
    body: 'Raleway',
    heading: 'Raleway',
    mono: 'Raleway',
  },
  space: {
    '0.5': 4,
    '1': 8,
    '1.5': 12,
    '1/8': 1,
    '10': 80,
    '12': 96,
    '16': 128,
    '2': 16,
    '2.5': 20,
    '20': 160,
    '24': 192,
    '3': 24,
    '3.5': 28,
    '32': 256,
    '4': 32,
    '40': 320,
    '48': 384,
    '5': 40,
    '56': 448,
    '6': 48,
    '64': 512,
    '7': 56,
    '72': 576,
    '8': 64,
    '80': 640,
    '9': 72,
    '96': 768,
  },
};
