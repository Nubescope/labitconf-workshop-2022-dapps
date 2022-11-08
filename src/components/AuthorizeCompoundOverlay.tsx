import { FC } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

import LoadingOverlay from './LoadingOverlay'

const AuthorizeCompoundOverlay: FC<{ isLoading: boolean, onAuthorizePress?: () => void }> = ({
  isLoading,
  onAuthorizePress,
}) => {
  if (isLoading) {
    return <LoadingOverlay />
  }

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
        Para empezar a invertir necesitás autorizar a que Compound acceda a tus DAI
      </Text>
      <Button colorScheme="red" onClick={onAuthorizePress}>
        Autorizar a Compound
      </Button>
    </Box>
  )
}

export default AuthorizeCompoundOverlay
