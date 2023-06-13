import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, Link, Pressable, Stack, Text, ZStack, VStack, Input, InputGroup, Heading, Collapse } from 'native-base';
import { useState, FC, useEffect } from 'react';

import { RouteParamsList, RoutesEnum, VisIcon, VisOffIcon, HeaderLogin } from '../../shared';
import { useAuthStore } from '../../store';
import { AlertMessage } from './Alert';

type Props = NativeStackNavigationProp<RouteParamsList, RoutesEnum.SIGNIN>;

export const SignInElement: FC = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { currentUser, loginRequest, loginRequestStatus } = useAuthStore();

  const navigation = useNavigation<Props>();

  const handleLogin = async () => {
    loginRequest(email, password);
    // setEmail('');
    // setPassword('');
  };
  useEffect(() => {
    if (currentUser) {
      navigation.navigate(RoutesEnum.PROFILE);
    }
  }, [currentUser, navigation]);

  return (
    <>
      <Stack w="100%" h="100%" position="absolute" zIndex={-1}>
        <HeaderLogin />
      </Stack>
      <ZStack alignItems="center">
        <Box w="90%" h={630} mt={105} bgColor="#EEF0F3" borderRadius={3}>
          <Stack h="100%">
            <VStack flexDirection="column" alignItems="center" justifyContent="center" marginTop={6}>
              <Box color="#EEF0F3">
                <Heading>Войти</Heading>
              </Box>
              <Collapse isOpen={loginRequestStatus === 'error'} mt={2}>
                <AlertMessage />
              </Collapse>
              <Box alignItems="center" flexDirection="column">
                <InputGroup flexDirection="column" alignItems="center" mt={4}>
                  <Input
                    type="text"
                    placeholder="Адрес электронной почты"
                    mb={4}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />

                  <Input
                    placeholder="Пароль"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>{show ? <VisIcon /> : <VisOffIcon />}</Pressable>
                    }
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                </InputGroup>
                <Link
                  _text={{
                    color: '#8B5CF6',
                    fontSize: 'sm',
                  }}
                  alignSelf="flex-end"
                  mt={2}
                  isUnderlined={false}
                  href="/"
                  onPress={() => navigation.navigate(RoutesEnum.RESTORE_PASSWORD)}
                >
                  Не помню пароль
                </Link>
              </Box>
            </VStack>
            <Pressable flex={1} w="100%" mt={6} onPressOut={handleLogin}>
              {({ isPressed }) => (
                <Box
                  alignItems="center"
                  bg={
                    isPressed
                      ? '#FFFFFF'
                      : {
                          linearGradient: {
                            colors: ['#679BFC', '#2B57A8'],
                            end: [1, 0],
                            start: [0, 0],
                          },
                        }
                  }
                  borderRadius={2}
                  p={2}
                >
                  <Text style={[{ color: isPressed ? '#1559D7' : '#FFFFFF' }]} fontSize={18} fontWeight={500}>
                    Войти
                  </Text>
                </Box>
              )}
            </Pressable>
          </Stack>
        </Box>
      </ZStack>
    </>
  );
};
