import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName= {'Nick'} />
      <Text style={styles.bigText}>Hello Nick {"\n"}
      🐬 🦊 🐸</Text>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
bigText: {
  fontSize: '55vw',
  color: 'yellow'
},

  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
