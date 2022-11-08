import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { CDAI, DAI } from '../constants'

const useCdaiDisapprove = () => {
  const { config } = usePrepareContractWrite({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: 'approve',
    args: [CDAI.address, '0'],
  })

  return useContractWrite(config)
}

export default useCdaiDisapprove
