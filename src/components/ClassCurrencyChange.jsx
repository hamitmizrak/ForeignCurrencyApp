// axios
import axios from 'axios';

// react
import React, { Component } from 'react'

// Text, View,  TextInput, StyleSheet
import { StyleSheet, Text, TextInput, View } from 'react-native';

// CLASS 
class ClassCurrencyChange extends Component {

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state = {
            tryCurrency: "",
            usdCurrency: "",
            eurCurrency: "",
            inputData: "", // input data
            rates: [],
        }
         debugger;
         console.log("Constructor");
        // BIND
        this.getCurrencyRates=this.getCurrencyRates.bind(this);
    }

    // Döviz Oranları
    getCurrencyRates() {
        // fixer.io döviz api aldım
        axios.get("http://data.fixer.io/api/latest?access_key=0a07761e47ce11c343b158db8f1a667f&symbols=EUR,USD,TRY")
            .then((response) => {
                console.log(response);
                const myRates = response.data.rates;
                this.setState({
                    // setStatekey ve value aynı isimde ise sadece bir kere yazmamız yeterli
                    rates: myRates
                })
            })
            .catch((err) => { console.error(err); })
    }

    // CDM 
    componentDidMount() {
        console.log("Component did mount ");
        this.getCurrencyRates();
    }


    // FUNCTION

    // RENDER
    render() {

        // object destructing
        const { currencyCss, inputCss, textCss } = styles;
        const { tryCurrency,rates } = this.state;

        // RETURN
        return (
            <View style={currencyCss}>
                <TextInput
                    style={inputCss}
                    placeholder='Lütfen EUR birim giriniz'
                    keyboardType='numeric'
                    onChangeText={(data) => {
                        // Eğer || 0 yazmazsak NaN verir.
                        const changeFloatData=parseFloat(data) || 0;
                        // toFixed Virgülden sonra ki rakam sayısını gösterir

                        this.setState({
                            inputData: data,
                            tryCurrency: (changeFloatData*rates['TRY']).toFixed(4),
                            usdCurrency: (changeFloatData*rates['USD']).toFixed(4),
                            eurCurrency: (changeFloatData*rates['EUR']).toFixed(4),
                        })
                    }}
                    value={this.state.inputData}
                />
                <Text style={textCss}>TRY: {tryCurrency}</Text>
                <Text style={textCss}>USD: {this.state.usdCurrency}</Text>
                <Text style={textCss}>EUR: {this.state.eurCurrency}</Text>
            </View>
        )  //end return
    }  //end render
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
export default ClassCurrencyChange;
