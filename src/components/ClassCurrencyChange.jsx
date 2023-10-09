import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';

// CLASS 
class ClassCurrencyChange extends Component {

    // RENDER
    render() {

        // object destructing
        const { currencyCss,inputCss } = styles;

        // RETURN
        return (
            <View style={ currencyCss }>ClassCurrencyChange</View>
        )
    }
}


// CSS
const styles = StyleSheet.create({
    currencyCss:{

    },
    inputCss:{

    }
});


// EXPORT
export default ClassCurrencyChange;
