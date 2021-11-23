import { useEffect, useState } from 'react'
import { MenuIcon } from './MenuIcon'
import Link from 'next/link'
import { motion } from 'framer-motion'
export const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const page = document.getElementById('current-page');
      if(page) {
        page.classList.add('hidden')
      }
    } else {
      document.body.style.overflow = 'unset'
      const page = document.getElementById('current-page');
      if(page) {
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
          className=' absolute flex-col items-center justify-start mt-4 bg-grayBg rounded-2xl p-8'
          style={{
            left: 0,
            top: 80,
            width: '100%',
            height: '50vh',
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col">
            <Link href='/'>
              <a onClick={closeMenu} className="mobile-nav-link">Home</a>
            </Link>
            <Link href='/projects'>
              <a onClick={closeMenu} className="mobile-nav-link">Projects</a>
            </Link>
            <Link href='/work'>
              <a onClick={closeMenu} className="mobile-nav-link">Work Experience</a>
            </Link>
            <Link href='/education'>
              <a onClick={closeMenu} className="mobile-nav-link">Education</a>
            </Link>
            <Link href='/contact'>
              <a onClick={closeMenu} className="mobile-nav-link">Contact</a>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// const MobileMenuItem: React.FC<{ href: string; children: React.ReactNode }> = ({
//   href,
//   children,
// }) => {
//   return (
//     <Link href={href}>
//       <a className='block px-4 py-2 text-gray-700 hover:text-gray-900'>
//         {children}
//       </a>
//     </Link>
//   )
// }