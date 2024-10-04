import { ChakraProvider } from '@chakra-ui/react';
import AuditorComponent from './AuditorComponent';

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <AuditorComponent />
            </div>
        </ChakraProvider>
    );
}

export default App;
