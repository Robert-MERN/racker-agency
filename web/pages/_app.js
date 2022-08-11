import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { ContextProvider } from '../context/contextProvider';

function MyApp({ Component, pageProps }) {
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
  }
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <ContextProvider>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </AlertProvider>
  )
}

export default MyApp
