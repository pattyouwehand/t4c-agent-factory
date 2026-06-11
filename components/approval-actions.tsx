'use client'

import { useState } from 'react'

type ApprovalStatus = 'draft' | 'review' | 'approved' | 'rejected' | 'needs-work';

export function ApprovalActions({ initialStatus }: { initialStatus: ApprovalStatus }) {
  const [status, setStatus] = useState<ApprovalStatus>(initialStatus)

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="mb-3 text-sm text-zinc-500">Human approval</p>

      <div className="mb-4">
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
          Status: {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setStatus('approved')}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Approve
        </button>

        <button
          onClick={() => setStatus('needs-work')}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200"
        >
          Needs work
        </button>

        <button
          onClick={() => setStatus('rejected')}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400"
        >
          Reject
        </button>
      </div>
    </div>
  )
}