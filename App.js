/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import Colors from './src/utilites/Color'
import Fonts from './src/utilites/Font'
import strings, { ChangeAppLanguage } from './src/utilites/Strings';

function App() {

  const { HELLO_WORLD } = strings
  const [langUpdate, setLanguage] = useState("en")

  function ChangeLanguage(Language) {
    ChangeAppLanguage(Language)
    setLanguage(Language)
  }

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Text style={styles.txt}>{HELLO_WORLD}</Text>
      </View>
      <View style={styles.body1}>
        <Text style={styles.txtBerne}>{HELLO_WORLD}</Text>
      </View>

      <View style={styles.body2}>
        <Text style={styles.txt}>{HELLO_WORLD}</Text>
      </View>

      <View style={styles.body1}>
        <Text style={styles.txtChella}> {HELLO_WORLD}</Text>
      </View>
      <View style={styles.body}>
        <Button
          title="Change Language to English"
          color={Colors.ORANGE}
          onPress={() => ChangeLanguage("en")}
        />
      </View>
      <View style={styles.body}>
        <Button
          title="Change Language to Swedish"
          color={Colors.ORANGE}
          onPress={() => ChangeLanguage("sv")}
        />
      </View>
      <View style={styles.body}>
        <Button
          title="Change Language to Urdu"
          color={Colors.ORANGE}
          onPress={() => ChangeLanguage("ur")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.GRAY

  },
  body: {
    flex: 1,
    backgroundColor: Colors.AQUA_GREEN
  },

  body1: {
    flex: 1,
    backgroundColor: Colors.RED
  },

  body2: {
    flex: 1,
    backgroundColor: Colors.ORANGE
  },
  txt: {
    fontSize: 30,
    fontFamily: Fonts.REGGAS_REGULAR

  },
  txtChella: {
    fontSize: 30,
    fontFamily: Fonts.CHELA_REGULAR
  },
  txtBerne: {
    fontSize: 40,
    fontFamily: Fonts.BERNADATTE
  }


});

export default App;
