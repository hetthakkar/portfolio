import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import cn from 'classnames'
import Image from 'next/image'
import { MobileNavBar } from './MobileNavBar'
export interface NavBarProps {
  firstName: string
  lastName: string
}

export const NavBar: React.FC = () => {
  return (
    <div className='flex items-center justify-start md:justify-end w-full relative max-w-2xl mx-auto text-lg text-gray-300 py-8'>
      <MobileNavBar />
      <NavItem href='/' text='Home' />
      <NavItem href='/projects' text='Projects' />
      <NavItem href='/work' text='Work Experience' />
      <NavItem href='/education' text='Education' />
      <NavItem href='/contact' text='Contact' />
    </div>
  )
}

// Following component inspired from https://github.com/leerob/leerob.io/blob/b80c365d9c9ee6eed314eb6142b5598abc63e1a5/components/Container.tsx
function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'font-semibold text-gray-300' : 'font-thin text-gray-300',
          'hidden md:inline-block p-1 rounded-lg hover:bg-gray-800 transition-all mx-3'
        )}
      >
        <span className='capsize'>{text}</span>
      </a>
    </Link>
  )
}
