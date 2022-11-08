import { FC } from 'react'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <footer
      style={{
        display: 'flex',
        flex: 1,
        padding: '2rem 0',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://underscope.io"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        Made with 🔥 by{' '}
        <Text ml="0.3rem" mr="0.3">
          <Image src="/underscope.png" alt="Underscope Logo" height={22} width={22} />
        </Text>
        Underscope
      </a>
    </footer>
  )
}

export default Footer
