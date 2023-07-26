import Router from './router/Router'
import GlobalStyle from './assets/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Router />
        </QueryClientProvider>
    )
}

export default App;
