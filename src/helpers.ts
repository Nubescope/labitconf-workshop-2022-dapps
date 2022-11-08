import { formatUnits, Result } from 'ethers/lib/utils'

export const formatBigNumber = (value?: Result, displayDecimals = 18, decimals = 18) => {
  if (!value) {
    return (0).toFixed(displayDecimals)
  }

  return (+formatUnits(value, decimals)).toFixed(displayDecimals)
}

export const foramtAddress = (address?: string) => {
  if (!address) {
    return
  }

  return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
}
