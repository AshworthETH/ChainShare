import WalletConnection from './WalletConnection'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">ChainShare</h1>
            <span className="text-sm text-gray-500">Decentralized File Sharing</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/upload" className="text-gray-700 hover:text-blue-600">
              Upload
            </a>
            <a href="/files" className="text-gray-700 hover:text-blue-600">
              My Files
            </a>
          </nav>

          <WalletConnection />
        </div>
      </div>
    </header>
  )
}