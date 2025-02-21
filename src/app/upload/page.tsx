'use client'

import { useState } from 'react'
import FileUpload from '@/components/FileUpload'

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isPublic, setIsPublic] = useState(true)
  const [uploading, setUploading] = useState(false)

  const handleFileUpload = (file: File) => {
    setSelectedFile(file)
  }

  const handleSubmit = async () => {
    if (!selectedFile) return

    setUploading(true)

    // TODO: Implement IPFS upload and blockchain interaction
    console.log('Uploading file:', selectedFile.name)
    console.log('Public:', isPublic)

    // Simulate upload delay
    setTimeout(() => {
      setUploading(false)
      alert('File uploaded successfully!')
    }, 2000)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Upload File to ChainShare
        </h1>

        <div className="space-y-6">
          <FileUpload onFileUpload={handleFileUpload} />

          {selectedFile && (
            <div className="bg-white border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Upload Settings</h3>

              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={isPublic}
                    onChange={() => setIsPublic(true)}
                    className="text-blue-600"
                  />
                  <span>Public (anyone can access)</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={!isPublic}
                    onChange={() => setIsPublic(false)}
                    className="text-blue-600"
                  />
                  <span>Private (invite only)</span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={uploading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'Uploading...' : 'Upload to Blockchain'}
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}