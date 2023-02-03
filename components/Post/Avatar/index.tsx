'use client'

import { useProfile } from 'nostr-react'
import Link from 'next/link'

interface Props {
  pubkey: string
}

export default function Avatar({ pubkey }: Props) {
  const { data } = useProfile({ pubkey })

  return (
    <Link href={pubkey} className="relative z-50">
      {data?.picture ? (
        <Link href={data.picture} className="relative" target="_blank">
          <img
            className="flex h-12 w-12 items-center justify-center rounded-full hover:opacity-90"
            src={data.picture}
            alt={data.picture}
          />
        </Link>
      ) : (
        <div className="z-50">
          <img
            className="h-12 w-12 items-center justify-center rounded-full hover:opacity-90 cursor-pointer hidden dark:flex bg-nero p-2"
            src="/logo/dark.svg"
            alt=""
          />
          <img
            className="flex h-12 w-12 items-center justify-center rounded-full hover:opacity-90 cursor-pointer dark:hidden bg-gray-200 p-2"
            src="/logo/light.svg"
            alt=""
          />
        </div>
      )}
    </Link>
  )
}
