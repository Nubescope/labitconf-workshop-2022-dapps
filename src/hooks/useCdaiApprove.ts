import { constants } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { CDAI, DAI } from '../constants'

const useCdaiApprove = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: 'approve',
    args: [CDAI.address, constants.MaxInt256],
  })

  return useContractWrite(config)
}

/**
 * Exports
 */

export default useCdaiApprove
