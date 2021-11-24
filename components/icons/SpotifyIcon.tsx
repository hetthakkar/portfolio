import Link from 'next/link'

const SvgComponent: React.FC<{
  className?: string
  transform?: string
  href: string
}> = (props) => {
  return (
    <Link href={props.href} passHref={true}>
      <svg
        width={24}
        height={24}
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
        {...props}
      >
        <path d='M19.098 10.638C15.23 8.341 8.85 8.13 5.157 9.251a1.121 1.121 0 11-.651-2.148c4.239-1.287 11.285-1.038 15.738 1.605a1.123 1.123 0 01-1.146 1.93zm-.126 3.403a.937.937 0 01-1.287.308c-3.225-1.982-8.142-2.557-11.958-1.399a.936.936 0 11-.543-1.79c4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267a.746.746 0 01-1.028.249c-2.818-1.722-6.365-2.111-10.542-1.157a.748.748 0 01-.333-1.458c4.571-1.045 8.492-.595 11.655 1.338a.747.747 0 01.248 1.028zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z' />
      </svg>
    </Link>
  )
}

SvgComponent.defaultProps = {
  transform: 'scale(0.8)',
}

export default SvgComponent
