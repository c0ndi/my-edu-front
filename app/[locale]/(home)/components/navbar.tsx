import React from 'react'
import LogoIcon from '@/public/images/shared/logo.svg'
import ArrowsLang from '@/public/images/shared/arrows-lang.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type Props = {}

export function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={LogoIcon}
        alt={"Logo."}
        width={32}
        height={32}
      />

      <p className='text-2xl font-bold text-black'>
        MY<span className='font-light'>EDU</span>
      </p>
    </div>
  )
}

export default function Navbar({ }: Props) {
  const t = useTranslations("navbar")

  return (
    <nav className='border-b border-[#E4E4E7]'>
      <div className='max-w-[1280px] flex mx-auto items-center py-6 px-3 overflow-hidden text-white'>
        <Logo />

        <Popover>
          <PopoverTrigger asChild className='ml-6 max-xs:ml-auto'>
            <button className='border border-[#e7e7e7] h-7 px-3 gap-2 font-light inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
              {t("langs.lang-1.name")}

              <Image
                src={ArrowsLang}
                alt={"Arrows lang."}
                width={10}
                height={10}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-max p-3 bg-white border-[#E4E4E4]">
            <div className='flex flex-col gap-3'>
              {new Array(4).fill(0).map((_, i) => (
                <Link key={i} href={`/${t(`langs.lang-${i + 1}.locale`)}`}>
                  <button className='border w-full border-[#f7f7f7] bg-[#f5f5f5] h-7 px-3 gap-2 font-light inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                    {t(`langs.lang-${i + 1}.name`)}
                  </button>
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Link href={t("dashboardButton.link")} className='ml-auto max-xs:hidden'>
          <button className="font-medium h-10 px-8 py-2 bg-[#131313] text-white hover:bg-[#131313]/90 gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            {t("dashboardButton.text")}
          </button>
        </Link>
      </div>
    </nav >
  )
}