import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainScreen from './src/screens/MainScreen/MainScreen';
export default function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MainScreen/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  
});
