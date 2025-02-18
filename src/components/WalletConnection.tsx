'use client'

import { useWeb3 } from '@/hooks/useWeb3'

export default function WalletConnection() {
  const { account, isConnected, isLoading, connectWallet, disconnectWallet } = useWeb3()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className="flex items-center space-x-4">
      {isConnected ? (
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            🟢 {formatAddress(account)}
          </div>
          <button
            onClick={disconnectWallet}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  )
}