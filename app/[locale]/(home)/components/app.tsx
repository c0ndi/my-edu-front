import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

export default function App({ }: Props) {
  const t = useTranslations("app")

  return (
    <section className='max-w-[1280px] flex flex-col items-center mx-auto py-12 px-2 overflow-hidden'>
      <div className='flex items-center flex-col w-[800px] max-lg:w-full'>
        <p className='text-[#E54141] font-extrabold'>{t("heading")}</p>
        <h2 className='text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#646464] max-md:text-2xl'>{t("subheading")}</h2>

        <p className='text-center font-medium text-lg text-[#e9e9e9] py-4 max-lg:text-base'>{t("description")}</p>
      </div>

      <Link href={t("aboutButton.link")}>
        <Button>
          {t("aboutButton.text")}
        </Button>
      </Link>
    </section>
  )
}