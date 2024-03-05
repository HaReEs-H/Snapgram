import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import { QueryProvider } from './lib/react-query/QueryProvider'

const el = document.getElementById('root')!
const root = ReactDOM.createRoot(el)

root.render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
)

/*ReactDOM.createRoot(document.getElementById('root')!).
render(<App />)
*/
