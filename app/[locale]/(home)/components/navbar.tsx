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
      <div className='max-w-[1280px] flex mx-auto items-center py-6 px-2 overflow-hidden text-white'>
        <Logo />

        <Popover>
          <PopoverTrigger asChild className='ml-6 max-xs:ml-auto'>
            <Button className='flex items-center gap-2 font-light'>
              {t("langs.lang-1.name")}

              <Image
                src={ArrowsLang}
                alt={"Arrows lang."}
                width={10}
                height={10}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-max bg-white border-[#E4E4E7]">
            <div className='flex flex-col gap-3'>
              {new Array(4).fill(0).map((_, i) => (
                <Link key={i} href={`/${t(`langs.lang-${i + 1}.locale`)}`}>
                  <Button className='text-black w-full font-light'>{t(`langs.lang-${i + 1}.name`)}</Button>
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Link href={t("dashboardButton.link")} className='ml-auto max-xs:hidden'>
          <Button variant={"secondary"} size={"lg"}>
            {t("dashboardButton.text")}
          </Button>
        </Link>
      </div>
    </nav>
  )
}