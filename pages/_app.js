import { ApolloProvider } from '@apollo/client'
import client from '../utils/apollo-client'
import '../styles/globals.css'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={ client }>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp
