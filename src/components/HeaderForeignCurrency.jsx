
import { StyleSheet, Text, View } from 'react-native';

// FUNCTION
export default function HeaderForeignCurrency() {

  // RETURN
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header App</Text>
    </View>
  );
}

// STYLES
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
