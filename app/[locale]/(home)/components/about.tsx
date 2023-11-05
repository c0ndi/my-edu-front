import React from 'react'
import { useTranslations } from 'next-intl'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Chart from './chart'

type Props = {}

export default function About({ }: Props) {
  const t = useTranslations("about")
  return (
    <section className='max-w-[1280px] flex flex-col mx-auto py-16 px-3' id="about">
      <div className='w-full flex gap-6 max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full'>
          <p className='text-[#E54141] font-extrabold'>{t("subheading")}</p>
          <h2 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#646464] max-lg:text-2xl'>{t("heading")}</h2>

          <Accordion type="single" collapsible className='mt-12 text-[#e9e9e9]'>
            {new Array(5).fill(0).map((_, i) => (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger className='text-left'>{t(`question-${i + 1}.question`)}</AccordionTrigger>
                <AccordionContent>
                  {t(`question-${i + 1}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className='w-1/2 mt-auto relative max-lg:w-full max-xs:scale-[1.08] max-xs:-translate-x-2'>
          <Chart />
          <p className='text-[#888888] text-xs absolute right-0'>{"(monthly users grow)"}</p>
        </div>
      </div>
    </section>
  )
}