import { FC } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const LoadingOverlay: FC = () => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
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
      <Spinner />
    </Box>
  )
}

export default LoadingOverlay
