
import { StyleSheet, Text, View } from 'react-native';

// FUNCTION
export default function FooterForeignCurrency() {

  // RETURN
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>&copy; 2022 - {new Date().getFullYear()}</Text>
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
