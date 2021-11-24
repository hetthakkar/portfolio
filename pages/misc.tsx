import { IBaseProps } from '../common/interfaces'
import { NextPage } from 'next'
import { BookCard } from '../components/BookCard'
const Misc: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <div className=''>
      <div className='content-box text-white font-bold text-4xl mb-10 mt-8'>
        Currently Reading
      </div>
      <div className='flex justify-center items center flex-wrap w-full max-w-2xl mx-auto'>
        <BookCard
          title='Dune'
          author='Frank Herbert'
          description="Started reading Dune a few years ago but couldn't get into the story. Watching the movie got me back into the story and I am sold. The deep philosophy and complex world of Frank Herbert are incredibly captivating "
          cover='/dune_cover.png'
          className='mb-8 '
          coverWidth={300}
          coverHeight={450}
        />
        <BookCard
          title='Rust in Action'
          author='Tim McNamara'
          description='I went through the Rust book about a year ago without digesting much of it. Recently came across a few Rust evangelists recommending this on Twitter and started reading it. This book goes into the motivation behind a lot of the Rust features and makes you appreciate them. '
          cover='/rust_in_action_cover.png'
          coverWidth={415}
          coverHeight={519}
          className='mb-8 md:max-h-44'
        />
      </div>
    </div>
  )
}

export default Misc
