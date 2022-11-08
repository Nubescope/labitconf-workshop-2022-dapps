import { FC } from 'react'
import TokenBox from './TokenBox'

interface Props {
  balance: string;
  isLoading?: boolean;
  onWithdrawPress?: () => void;
}

const CdaiBox: FC<Props> = (props) => {
  return (
    <TokenBox
      {...props}
      label="Compound DAI"
      actionLabel="Retirar"
      logoUri="/compound.svg"
      onActionButtonPress={props.onWithdrawPress}
    />
  )
}

export default CdaiBox
