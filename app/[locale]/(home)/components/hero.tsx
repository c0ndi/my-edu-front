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
    <section className='max-w-[1280px] flex flex-col mx-auto max-lg:py-6 px-2 overflow-hidden'>
      <div className='w-full flex items-center max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full'>
          <Badge text={t("badge")} />
          <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#646464] to-[#0F172A] max-lg:text-3xl '>{t("heading")}</h1>
          <p className='font-medium text-lg text-[#64748B] py-4 max-lg:text-base'>{t("description")}</p>
          <div className='flex gap-3 max-sm:flex-col'>
            <Link href={t("dashboardButton.link")}>
              <Button variant={"secondary"} size={"lg"} className='max-sm:w-full'>
                {t("dashboardButton.text")}
              </Button>
            </Link>
            <Link href={t("aboutButton.link")}>
              <Button size={"lg"} className='max-sm:w-full'>
                {t("aboutButton.text")}
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={Preview}
          alt={"Login app preview."}
          className='w-1/2 max-lg:w-full max-lg:translate-x-0'
        />
      </div>
    </section>

  )
}