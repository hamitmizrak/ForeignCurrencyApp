import { StyleSheet, Text, View } from 'react-native';
import HeaderForeignCurrency from './HeaderForeignCurrency';

export default function FunctionForeignCurrency() {
    
  return (
    <View style={styles.container}>
      <HeaderForeignCurrency headerTextData='Currency Data Change' />
      <Text>Function Foreign Currency!</Text>
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
});
