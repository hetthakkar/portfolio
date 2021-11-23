export const MenuIcon: React.FC<{
  isOpen: boolean
  onClick: () => void
  className?: string
}> = (props) => {
  return props.isOpen ? (
    <svg height={32} width={28} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96' {...props}>
      <path
        d='M96 14L82 0 48 34 14 0 0 14l34 34L0 82l14 14 34-34 34 34 14-14-34-34z'
      />
    </svg>
  ) : (
    <svg height={32} width={32} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z' />
    </svg>
  )
}
