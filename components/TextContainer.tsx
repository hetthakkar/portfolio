import cn from 'classnames'
import { motion, MotionProps } from 'framer-motion'

interface TextContainerProps extends MotionProps {
  className?: string
}

const defaultProps: TextContainerProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

const TextContainer: React.FC<TextContainerProps> = (props) => {
  return (
    <motion.div
      {...props}
      className={cn(
        'bg-grayBg rounded-lg w-full max-w-2xl mx-auto p-8',
        props.className
      )}
    >
      {props.children}
    </motion.div>
  )
}

TextContainer.defaultProps = defaultProps

export { TextContainer }
