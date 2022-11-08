import { Result } from 'ethers/lib/utils'
import { useCallback, useEffect, useState } from 'react'
import { useContract, useProvider } from 'wagmi'

import { CDAI } from '../constants'
import { formatBigNumber } from '../helpers'

const useCdaiUnderlyingBalance = (address?: string) => {
  const [result, setResult] = useState<Result>()
  const [isLoading, setIsLoading] = useState(false)
  const provider = useProvider()

  const contract = useContract({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    signerOrProvider: provider,
  })

  const refetch = useCallback(() => {
    const run = async () => {
      setIsLoading(true)
      const res = await contract.callStatic.balanceOfUnderlying(address)
      setIsLoading(false)

      if (res) {
        setResult(res)
      }
    }

    if (contract && address) {
      run()
    }
  }, [contract, address])

  useEffect(refetch, [refetch])

  return { 
    refetch, 
    isLoading, 
    formatted: formatBigNumber(result, 2)
  }
}

export default useCdaiUnderlyingBalance
