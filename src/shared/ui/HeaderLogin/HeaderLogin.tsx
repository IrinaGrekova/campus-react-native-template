import { Stack, Box, Image } from 'native-base';
import { FC } from 'react';
import { LogoCampus } from './logoCampus.png';
import { LogoMGMSU } from './logoMGMSU.png';

export const HeaderLogin: FC = () => (
  <Stack w="100%" h="100%" position="absolute" zIndex={-1}>
    <Box
      h="20%"
      bg={{
        linearGradient: {
          colors: ['#AB87EA', '#4F7FDA'],
          end: [1, 0],
          start: [0, 0],
        },
      }}
    >
      <Box flexDirection="row" justifyContent="space-between" ml={3} mr={3}>
        <Image source={LogoCampus} alt="CampusLogo" top={6} />
        <Image source={LogoMGMSU} alt="logoMGMSU" top={4} size={16} />
      </Box>
    </Box>
  </Stack>
);
