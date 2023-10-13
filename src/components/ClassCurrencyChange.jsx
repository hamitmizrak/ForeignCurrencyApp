import React, { Component } from 'react'
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
            inputData: "" // input data
            
        }
        debugger;
        console.log("Constructor");
        // BIND
    }
  
    // RENDER
    render() {

        // object destructing
        const { currencyCss, inputCss, textCss } = styles;
        const {tryCurrency} = this.state;

        // RETURN
        return (
            <View style={currencyCss}>
                <TextInput
                    style={inputCss}
                    placeholder='Lütfen EUR birim giriniz'
                    onChange={(data) => {
                        this.setState({
                            inputData: data
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
