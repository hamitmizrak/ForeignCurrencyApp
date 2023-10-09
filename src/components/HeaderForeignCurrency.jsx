
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderForeignCurrency() {
    
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontSize: 18,
    textAlign: 'center'
  }
});
