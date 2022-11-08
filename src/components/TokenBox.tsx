import { FC, useEffect, useState } from 'react'
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import LoadingOverlay from './LoadingOverlay'

interface Props {
  label: string;
  actionLabel: string;
  logoUri: string;
  balance: string;
  isLoading?: boolean;
  onActionButtonPress?: () => void;
}

const TokenBox: FC<Props> = ({ label, actionLabel, logoUri, balance, isLoading, onActionButtonPress }) => {
  return (
    <Box
      style={{
        margin: '1rem',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        maxWidth: '300px',
        position: 'relative',
      }}
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Stat mb="3" textAlign="center">
        <StatLabel fontSize="md">{label}</StatLabel>
        <StatNumber>${balance}</StatNumber>
      </Stat>
      <Image alt={`${label} logo`} src={logoUri} width={100} height={100} />
      <Button mt="5" disabled={!onActionButtonPress} onClick={onActionButtonPress}>
        {actionLabel}
      </Button>
      {isLoading && <LoadingOverlay />}
    </Box>
  )
}

export default TokenBox
