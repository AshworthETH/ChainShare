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

        <div className="mt-8 space-x-4">
          <a
            href="/upload"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Upload File
          </a>
          <a
            href="/files"
            className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            My Files
          </a>
        </div>
      </div>
    </main>
  )
}