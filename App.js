/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import Colors from './src/utilites/Color'
import Fonts from './src/utilites/Font'
import NotifService from './src/utilites/Notification/NotifService';
import strings, { ChangeAppLanguage } from './src/utilites/Strings';

function App() {

  const { HELLO_WORLD } = strings
  const [notifArr] = useState(["lang_en", "lang_sv", "lang_ur", "welcome"])
  const [langUpdate, setLanguage] = useState("en");

  let notif = new NotifService();
  useEffect(() => {
    notif = new NotifService(
      onRegister.bind(this),
      onNotifRecieve.bind(this)
    );

  }, []);
  function onRegister(token) {

    //save token or anything
  }
  function onNotifRecieve(notification) {

    //on receiving notif
    Alert.alert(notification.title, notification.message)
    console.log(notification)
    notificationAction(notification.id)
  }
  function notificationAction(notificationType) {
    if (notificationType == "lang_en")
      ChangeLanguage("en");

    else if (notificationType == "lang_sv")
      ChangeLanguage("sv");

    else if (notificationType == "lang_ur")
      ChangeLanguage("ur");

    else if (notificationType == "welcome")
      console.log("Welcome notifi")
    else
      console.log(notificationType)

  }
  function ChangeLanguage(Language) {

    console.log("language " + Language)
    ChangeAppLanguage(Language)
    setLanguage(Language)
  }

  function sendRandomScheduleNotif() {
    const date = new Date(Date.now() + 10 * 1000);
    const randomIndex = Math.floor(Math.random() * notifArr.length)
    notif.scheduleNotif(notifArr[randomIndex], date);
  }
  function sendLocalNotifRandom() {
    const randomIndex = Math.floor(Math.random() * notifArr.length)
    notif.localNotif(notifArr[randomIndex]);
  }
  return (
    <View style={styles.container}>

      <View style={styles.body1}>
        <Text style={styles.txtBerne}>{HELLO_WORLD}</Text>
      </View>

      <View style={styles.body}>
        <Button
          title={strings.LOCAL_NOTIFICATION}
          color={'white'}
          onPress={() => sendLocalNotifRandom()}
        />
      </View>
      <View style={styles.body}>
        <Button
          title={strings.SCHEDULE_NOTIFICATION}
          color={'white'}
          onPress={() => sendRandomScheduleNotif()}
        />
      </View>


      <View style={styles.body}>
        <Button
          title={strings.CHANGE_LANGUAGE_EN}
          color={'white'}
          onPress={() => ChangeLanguage("en")}
        />
      </View>
      <View style={styles.body}>
        <Button
          title={strings.CHANGE_LANGUAGE_SV}
          color={'white'}
          onPress={() => ChangeLanguage("sv")}
        />
      </View>
      <View style={styles.body}>
        <Button
          title={strings.CHANGE_LANGUAGE_UR}
          color={'white'}
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
    // backgroundColor: Colors.GRAY

  },
  body: {
    justifyContent: 'center',
    height: '10%',
    backgroundColor: Colors.AQUA_GREEN,
    borderColor: 'white',
    borderWidth: 1
  },

  body1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.RED
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
