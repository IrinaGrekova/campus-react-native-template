import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Box, ZStack, Link, Stack } from 'native-base';
import { FC } from 'react';
import { RouteParamsList, RoutesEnum, HeaderLogin } from '../../shared';

type Props = NativeStackNavigationProp<RouteParamsList, RoutesEnum.SUCCESSFULSENDING>;

export const SuccessSendingElement: FC = () => {
  const navigation = useNavigation<Props>();

  return (
    <>
      <Stack w="100%" h="100%" position="absolute" zIndex={-1}>
        <HeaderLogin />
      </Stack>
      <ZStack alignItems="center">
        <Box w={350} h={630} mt={106} bgColor="#EEF0F3" borderRadius={3}>
          <Link
            _text={{
              color: '#8B5CF6',
              fontSize: 'sm',
              lineHeight: '16',
            }}
            alignSelf="flex-end"
            mt={1}
            mr={1}
            isUnderlined={false}
            href="./"
            onPress={() => navigation.navigate(RoutesEnum.NEW_PASSWORD)}
          >
            Ввод нового пароля
          </Link>
          <Box
            mt={20}
            _text={{
              textAlign: 'center',
            }}
          >
            Сообщение успешно отправлено. Пожалуйста, следуйте инструкциям в письме.
          </Box>
        </Box>
      </ZStack>
    </>
  );
};
