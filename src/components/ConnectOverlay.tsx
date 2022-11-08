import { FC } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

const ConnectOverlay: FC<{ onConnectPress?: () => void }> = ({ onConnectPress }) => {
  return (
    <Box
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '.95',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        border: '1px solid #DDD',
        borderRadius: '10px',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Text fontSize="2xl" align="center" mb="6" lineHeight={1.5}>
        Por favor, conectá tu wallet para empezar a invertir
      </Text>
      <Button colorScheme="blue" onClick={onConnectPress}>
        Conectar
      </Button>
    </Box>
  )
}

export default ConnectOverlay
