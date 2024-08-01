import { View, StyleSheet } from 'react-native';
import Home from './components/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 50,
    paddingHorizontal: 20
  },
});