import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'



function MyApp({ Component, pageProps }: AppProps) {

  if(Component.displayName === 'Sines') {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} firstName={"Het"} lastName={"Thakkar"} />
    </Layout>
  )
}
export default MyApp
