import { BigNumber } from 'ethers'
import { useContractRead } from 'wagmi'

import { CDAI, DAI } from '../constants'

const useCdaiAllowance = (address?: string) => {
  const res = useContractRead({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: 'allowance',
    args: [address, CDAI.address],
  })

  return {
    ...res,
    isAuthorized: BigNumber.from(res.data || 0).gt(0),
  }
}

/**
 * Exports
 */

export default useCdaiAllowance
