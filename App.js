// Routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { StatusBar } from 'expo-status-bar';

// React native
import { Button, StyleSheet, Text, View } from 'react-native';

// Function Calculator
import ClassMainForeignCurrency from './src/components/ClassMainForeignCurrency';
import FunctionMainForeignCurrency from './src/components/FunctionMainForeignCurrency';





// CREATE
// Create Native Stack
const Stack = createNativeStackNavigator();

//FUNCTION
// 1.YOL   const App = () => { }
// 2.YOL   function App() {}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"      component={HomeScreen}    options={{ title: "Anasayfa" }} />
        <Stack.Screen name="ClassMainForeignCurrency" component={ClassMainForeignCurrency} options={{ title: "Class ForeignCurrency Alanı" }} />
         <Stack.Screen name="FunctionMainForeignCurrency" component={FunctionMainForeignCurrency} options={{ title: "Function ForeignCurrency Alanı" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

///////////////////////////////////////
// BUTTON HomeScreen
const HomeScreen = ({ navigation,route }) => {
  return (
    <View>

      {/* Class  Foreign Currency */}
      <Button
        title='Döviz Class'
        color="orange"
        onPress={() => navigation.navigate('ClassMainForeignCurrency', { name: ' Component Class Foreign Currency' })} />

      {/* Function  Foreign Currency  */}
        <Button
        title='Döviz Function'
        color="blue"
        onPress={() => navigation.navigate('FunctionMainForeignCurrency', { name: ' Component Function ForeignCurrency' })} />

    </View> // common View
  ); //end return 
} //end HomeScreen


// EXPORT
export default App;