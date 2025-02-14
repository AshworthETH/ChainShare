export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        ChainShare
      </h1>

      <div className="text-center">
        <p className="text-xl mb-6">
          Decentralized file sharing on the blockchain
        </p>

        <div className="space-y-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Upload & Share</h2>
            <p>Upload your files to IPFS and share them securely</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Access Control</h2>
            <p>Control who can access your files using smart contracts</p>
          </div>
        </div>
      </div>
    </main>
  )
}