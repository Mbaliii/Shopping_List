import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ShopHeader from './src/components/ShopHeader';
import ShoppingList from './src/components/ShoppingList';
import store from "./src/redux/store";
import { Provider } from 'react-redux';


export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <ShopHeader />
        <ShoppingList />
      </SafeAreaView>
    )
  }

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  )
}