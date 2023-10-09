import {StyleSheet, Text, View} from 'react-native';
import HeaderForeignCurrency from './HeaderForeignCurrency';
import FooterForeignCurrency from './FooterForeingCurrency';
import FunctionCurrencyChange from './FunctionCurrencyChange';

// CLASS
export default function ClassMainForeignCurrency() {

    // RETURN
    return (
        <View style={styles.container}>
            <HeaderForeignCurrency headerTextData='Header Currency Data Change'/>

            <FunctionCurrencyChange/>

            <FooterForeignCurrency footerTextData='@copy; Bütün haklar saklıdır'/>
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
});
