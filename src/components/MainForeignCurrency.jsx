import { StyleSheet, Text, View } from 'react-native';
import HeaderForeignCurrency from './HeaderForeignCurrency';
import FooterForeignCurrency from './FooterForeingCurrency';

export default function MainForeignCurrency() {
    
  return (
    <View style={styles.container}>
      <HeaderForeignCurrency headerTextData='Header Currency Data Change' />
      
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
