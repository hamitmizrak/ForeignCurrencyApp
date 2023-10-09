import { StyleSheet, Text, View } from 'react-native';
import HeaderForeignCurrency from './HeaderForeignCurrency';
import FooterForeignCurrency from './FooterForeingCurrency';
import FunctionCurrencyChange from './FunctionCurrencyChange';

export default function ClassMainForeignCurrency() {
    
  return (
    <View style={styles.container}>
      <HeaderForeignCurrency headerTextData='Header Currency Data Change' />

      <FunctionCurrencyChange />
      
      <FooterForeignCurrency footerTextData='@copy; Bütün haklar saklıdır'/>
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
