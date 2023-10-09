import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// CLASS 
function FunctionCurrencyChange () {

    // STATE
    const [tryCurrency, setTryCurrency] = useState(null);
    const [usdCurrency, setUsdCurrency] = useState(null);
    const [eurCurrency, setEurCurrency] = useState(null);
    const [inputData, setInputData] = useState(null);


    // object destructing
    const { currencyCss, inputCss, textCss } = styles;

    // RETURN
    return (
        <View style={currencyCss}>
            <TextInput
                style={inputCss}
                placeholder='Lütfen EUR birim giriniz'
                onChange={(data) => {

                    setInputData(data)
                }}
                value={inputData}
            />
            <Text style={textCss}>TRY: {tryCurrency}</Text>
            <Text style={textCss}>USD: {usdCurrency}</Text>
            <Text style={textCss}>EUR: {eurCurrency}</Text>
        </View>
    )  //end return
} //end ClassCurrencyChange

// CSS
const styles = StyleSheet.create({
    currencyCss: {
        paddingTop: -10,
    },
    inputCss: {
        height: 25
    },
    textCss: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20
    }
});

// EXPORT
export default FunctionCurrencyChange;
