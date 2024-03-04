import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const el = document.getElementById('root')!
const root = ReactDOM.createRoot(el)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/*ReactDOM.createRoot(document.getElementById('root')!).
render(<App />)
*/
