'use client'

import { useState, useEffect } from 'react'
import Web3 from 'web3'

declare global {
  interface Window {
    ethereum?: any
  }
}

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [account, setAccount] = useState<string>('')
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        setIsLoading(true)

        await window.ethereum.request({ method: 'eth_requestAccounts' })

        const web3Instance = new Web3(window.ethereum)
        setWeb3(web3Instance)

        const accounts = await web3Instance.eth.getAccounts()
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
        }
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  const disconnectWallet = () => {
    setWeb3(null)
    setAccount('')
    setIsConnected(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet()
        } else {
          setAccount(accounts[0])
        }
      }

      window.ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  return {
    web3,
    account,
    isConnected,
    isLoading,
    connectWallet,
    disconnectWallet
  }
}