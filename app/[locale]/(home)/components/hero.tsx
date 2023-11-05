import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import Preview from '@/public/images/home/hero/preview.png'
import Image from 'next/image'
import Badge from './badge'

type Props = {}

export default function Hero({ }: Props) {
  const t = useTranslations("hero")
  return (
    <section className='max-w-[1280px] flex flex-col mx-auto max-lg:py-6 px-3 overflow-hidden'>
      <div className='w-full flex items-center max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full'>
          <Badge text={t("badge")} />
          <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#646464] to-[#0F172A] max-lg:text-3xl '>{t("heading")}</h1>
          <p className='font-medium text-lg text-[#64748B] py-4 max-lg:text-base'>{t("description")}</p>
          <div className='flex gap-3 max-sm:flex-col'>
            <Link href={t("dashboardButton.link")}>
              <button className="font-medium h-10 px-8 py-2 bg-[#131313] text-white hover:bg-[#131313]/90 gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                {t("dashboardButton.text")}
              </button>
            </Link>
            <Link href={t("aboutButton.link")}>
              <button className='font-medium bg-[#fff] h-10 px-8 py-2 hover:bg-[#e9e9e9]/90 text-sm rounded-md text-black w-full transition-all'>
                {t("aboutButton.text")}
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={Preview}
          alt={"Login app preview."}
          className='w-1/2 max-lg:w-full max-lg:translate-x-0'
        />
      </div>
    </section >

  )
}