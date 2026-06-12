'use client'

export default function Error({reset}: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Agent malfunction
        </h1>

        <p className="mb-8 text-zinc-400">
          One of the agents appears to have gone rogue.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-full border border-zinc-700 px-5 py-3"
        >
          Retry
        </button>
      </div>
    </div>
  )
}