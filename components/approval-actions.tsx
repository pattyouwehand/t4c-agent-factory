'use client'

import { useState } from 'react'

type ApprovalStatus = 'draft' | 'review' | 'approved' | 'rejected' | 'needs-work';

export function ApprovalActions({ initialStatus }: { initialStatus: ApprovalStatus }) {
  const [status, setStatus] = useState<ApprovalStatus>(initialStatus)

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="mb-3 text-sm text-zinc-500">Human approval</p>

      <div className="mb-4">
        <span
          className={`rounded-full px-3 py-1 text-sm ${
            status === 'approved'
            ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-800'
            : status === 'needs-work'
            ? 'bg-amber-900/40 text-amber-300 border border-amber-800'
            : status === 'rejected'
            ? 'bg-red-950 text-red-300 border border-red-900'
            : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
          }`}
        >
          Status: {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setStatus('approved')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            status === 'approved'
              ? 'bg-zinc-200 text-black'
              : 'border border-zinc-700 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          Approve
        </button>

        <button
          onClick={() => setStatus('needs-work')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            status === 'needs-work'
              ? 'bg-zinc-200 text-black'
              : 'border border-zinc-700 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          Needs work
        </button>

        <button
          onClick={() => setStatus('rejected')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            status === 'rejected'
              ? 'bg-zinc-200 text-black'
              : 'border border-zinc-700 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          Reject
        </button>
      </div>
    </div>
  )
}