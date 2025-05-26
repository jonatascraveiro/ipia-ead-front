import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import { GlobalDialog } from './components/common/GlobalDialog'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/routes'
import { apolloClient } from './services/Apollo/client'
function App() {
  return (
    <>
      <ToastContainer />
      <GlobalDialog />
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <AppRoutes />
        </ApolloProvider>
      </AuthProvider>{' '}
    </>
  )
}

export default App
