import { BigNumber } from 'ethers'
import { parseUnits } from 'ethers/lib/utils'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { CDAI } from '../constants'

const useCdaiMint = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    functionName: 'mint',
    args: parseUnits('0.01'), // In order to simplify the demo we mint a fixed amount of DAI
  })

  return useContractWrite(config)
}

export default useCdaiMint
