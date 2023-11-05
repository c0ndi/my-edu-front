import Logo from '@/public/images/home/footer/logo.svg'
import Github from '@/public/images/home/footer/github.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Footer({ }: Props) {
  const t = useTranslations("footer")

  return (
    <footer className='border-t border-[#2A2A2A]'>
      <div className='max-w-[1280px] flex mx-auto justify-between items-center py-8 px-3 overflow-hidden text-white max-md:flex-col max-md:items-start'>
        <div className='flex gap-3 items-center w-1/3 max-md:w-full'>
          <Image
            src={Logo}
            alt={"Logo."}
            width={26}
            height={26}
          />
          <p className='text-sm'>@ 2023 MY<span className='font-medium'>EDU</span></p>
        </div>

        <div className='flex gap-16 justify-center max-md:flex-col max-md:gap-8 max-md:justify-start max-md:mt-6'>
          {new Array(4).fill(0).map((_, i) => (
            <Link href={t(`link-${i + 1}.link`)} key={i}>
              <p className='text-sm text-white cursor-pointer'>{t(`link-${i + 1}.text`)}</p>
            </Link>
          )
          )}
        </div>

        <div className='ml-auto max-md:ml-0 max-md:mt-6'>
          <Link href="https://github.com/c0ndi" target='_blank'>
            <Image
              src={Github}
              alt={"Github icon."}
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}