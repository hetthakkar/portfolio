// Auxillary react functional component to fill up seo stuff
import Head from 'next/head'
interface ContainerProps {
  children: React.ReactNode
  head?: {
    title?: string
    description?: string
  }
}

export const Container: React.FC<ContainerProps> = ({ children, head }) => {
  const headElements = {
    title: 'Het Thakkar — Software developer',
    description:
      'Het Thakkar, a software developer and masters student at NC State',
    url: 'https://hetthakkar.me',
    type: 'website',
    image: 'https://hetthakkar.me/jet.png',
    robots: 'index, follow',
    ...head,
  }

  return (
    <>
      <Head>
        <title>{headElements.title}</title>
        <meta name='description' content={headElements.description} />
        <meta name='robots' content={headElements.robots} />
        <meta name='image' content={headElements.image} />
        <meta name='url' content={headElements.url} />
        <meta name='type' content={headElements.type} />
        <meta name='og:title' content={headElements.title} />
        <meta name='og:type' content={headElements.type} />
        <meta name='og:image' content={headElements.image} />
        <meta name='og:url' content={headElements.url} />
        <meta name='og:description' content={headElements.description} />
      </Head>
      <main>{children}</main>
    </>
  )
}

Container.defaultProps = {
  head: {},
}
