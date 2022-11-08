import { Box, Button, Flex, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { foramtAddress } from '../helpers'

interface Props {
  address?: string;
  onConnectPress?: () => void;
  onDisconnectPress?: () => void;
}

const Nav: React.FC<Props> = ({ address, onConnectPress, onDisconnectPress }) => {
  return (
    <Box px={4} bg={useColorModeValue('gray.100', 'gray.900')} role="navigation">
      <Flex align="center" justify="space-between" h={16}>
        <Box fontSize={['sm', 'md', '2xl']}>
          <Text as="span" fontWeight="bold">
            Compound Finance Demo
          </Text>
        </Box>

        <Flex align="center">
          <Stack direction="row" spacing={3} alignItems="center">
            {address && <Text>{foramtAddress(address)}</Text>}
            {!address && onConnectPress && (
              <Button colorScheme="blue" onClick={onConnectPress}>
                Conectar
              </Button>
            )}
            {address && onDisconnectPress && (
              <Button colorScheme="blue" onClick={onDisconnectPress}>
                Desconectar
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
