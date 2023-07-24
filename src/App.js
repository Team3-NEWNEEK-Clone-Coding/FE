import Router from './router/Router'
import GlobalStyle from './assets/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
function App() {
    return (
        <QueryClientProvider client={QueryClient}>
            <GlobalStyle />
            <Router />
        </QueryClientProvider>
    )
}

export default App;
