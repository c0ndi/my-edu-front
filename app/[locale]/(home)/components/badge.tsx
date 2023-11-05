import React from 'react'
import Icon from '@/public/images/home/badge/icon.svg'
import Arrow from '@/public/images/home/badge/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <Link href="https://examifast.com" target='_blank'>
      <div className='mb-2 flex items-center gap-2 bg-[#27272A] px-2 py-1 w-max rounded-md'>
        <Image
          src={Icon}
          alt={"Badge icon."}
          width={12}
          height={12}
        />
        <p className='text-xs text-white'>{text}</p>
        <Image
          src={Arrow}
          alt={"Arrow icon."}
          width={9}
          height={9}
        />
      </div>
    </Link>
  )
}