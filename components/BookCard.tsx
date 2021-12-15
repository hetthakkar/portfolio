import classNames from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import Image from 'next/image'
interface BookCardProps extends MotionProps {
  className?: string
  cover: StaticImageData
  title: string
  author: string
  description: string
  coverWidth: number
  coverHeight: number
}

const defaultProps: Partial<BookCardProps> = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
  description: '',
  author: '',
  title: '',
  coverWidth: 0,
  coverHeight: 0,
}

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <motion.div
      {...props}
      className={classNames(
        'flex flex-col md:flex-row w-52 md:w-full rounded-2xl text-gray-300 shadow-md ',
        props.className
      )}
    >
      <Image
        src={props.cover}
        alt={props.title}
        width={props.coverWidth}
        height={props.coverHeight}
        placeholder="blur"
      />
      <div className='bg-grayLight p-4 rounded-b-lg md:rounded-r-lg md:rounded-b-none flex flex-col'>
        <div className='text-xl font-bold'>
          {props.title} by <i>{props.author}</i>
        </div>
        <p className=''>{props.description}</p>
      </div>
    </motion.div>
  )
}

BookCard.defaultProps = defaultProps

export { BookCard }
