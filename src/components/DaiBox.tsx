import { FC } from 'react'
import TokenBox from './TokenBox'

interface Props {
  balance: string;
  isLoading?: boolean;
  onDepositPress?: () => void;
}

const DaiBox: FC<Props> = (props) => {
  return (
    <TokenBox
      {...props}
      label="DAI"
      actionLabel="Depositar"
      logoUri="/dai.svg"
      onActionButtonPress={props.onDepositPress}
    />
  )
}

export default DaiBox
