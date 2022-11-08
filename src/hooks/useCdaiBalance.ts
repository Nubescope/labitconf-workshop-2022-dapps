import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { useContractRead } from 'wagmi'

import { CDAI } from '../constants'
import { formatBigNumber } from '../helpers'

const useCdaiBalance = (address?: string) => {
  const res = useContractRead({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    functionName: 'balanceOf',
    args: address,
  })

  return {
    ...res,
    formatted: formatBigNumber(res.data, 2),
  }
}

/**
 * Exports
 */

export default useCdaiBalance
