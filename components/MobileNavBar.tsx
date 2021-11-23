import { useEffect, useState } from 'react'
import { MenuIcon } from './MenuIcon'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import cn from 'classnames'

export const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const page = document.getElementById('current-page')
      if (page) {
        page.classList.add('hidden')
      }
    } else {
      document.body.style.overflow = 'unset'
      const page = document.getElementById('current-page')
      if (page) {
        page.classList.remove('hidden')
      }
    }
  }, [isOpen])

  return (
    <div className='visible md:hidden'>
      <MenuIcon
        className='fill-current text-gray-300 transition transition-all'
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className=' absolute flex-col items-center justify-start mt-4 bg-grayBg rounded-2xl p-8'
          style={{
            left: 0,
            top: 80,
            width: '100%',
            zIndex: 1000,
          }}
        >
          <div className='flex flex-col'>
            <MobileNavItem href='/' text='Home' onClick={closeMenu} />
            <MobileNavItem href='/projects' text='Projects' onClick={closeMenu} />
            <MobileNavItem href='/work' text='Work Experience' onClick={closeMenu} />
            <MobileNavItem href='/education' text='Education' onClick={closeMenu} />
            <MobileNavItem href='/contact' text='Contact' onClick={closeMenu} />
          </div>
        </motion.div>
      )}
    </div>
  )
}

const MobileNavItem: React.FC<{ href: string; text: string, onClick: () => void }> = ({
  href,
  text,
  onClick
}) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a onClick={onClick} className={
        cn('mobile-nav-link', isActive && 'font-semibold')}>
        {text}
      </a>
    </Link>
  )
}
