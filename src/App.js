import Router from './router/Router';
import GlobalStyle from './assets/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyle />
                <Router />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
