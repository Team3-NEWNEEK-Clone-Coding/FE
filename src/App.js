import React from 'react';
import Router from './router/Router';
import GlobalStyle from './assets/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import { EmojiProvider } from './pages/SignUpPage/EmojiContext';
const queryClient = new QueryClient();

function App() {
    const [selectedEmoji, setSelectedEmoji] = React.useState(null);
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyle />
                <EmojiProvider value={{ selectedEmoji, setSelectedEmoji }}>
                    <Router />
                </EmojiProvider>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
