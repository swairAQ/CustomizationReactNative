import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
    en: {
        HELLO_WORLD: "Hello world",
        CHANGE_LANGUAGE_EN: "Change language to English",
        CHANGE_LANGUAGE_SV: "Change language to Swedish",
        CHANGE_LANGUAGE_UR: "Change language to Urdu",
        LOCAL_NOTIFICATION: "Local notification",
        SCHEDULE_NOTIFICATION: "Schedule notification",
        DUMMY_TEXT: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    sv: {
        HELLO_WORLD: "Hej världen",
        CHANGE_LANGUAGE_EN: "ändra språk till engelska",
        CHANGE_LANGUAGE_SV: "ändra språk till svenska",
        CHANGE_LANGUAGE_UR: "ändra språk till urdu",
        LOCAL_NOTIFICATION: "Lokal anmälan",
        SCHEDULE_NOTIFICATION: "schema anmälan",
        DUMMY_TEXT: "Lorem Ipsum har varit branschens standardrapport sedan 1500-talet"
    },
    ur: {
        HELLO_WORLD: "ہیلو دنیا",
        CHANGE_LANGUAGE_EN: "زبان کو انگریزی میں تبدیل کریں",
        CHANGE_LANGUAGE_SV: "زبان کو سویڈش میں تبدیل کریں",
        CHANGE_LANGUAGE_UR: "زبان کو اردو میں تبدیل کریں",
        LOCAL_NOTIFICATION: "مقامی اطلاع",
        SCHEDULE_NOTIFICATION: "شیڈول کی اطلاع",
        DUMMY_TEXT: "لوریم ایپسم 1500s کے بعد سے ہی اس صنعت کا معیاری ڈمی متن رہا ہے",
    }

});

export function ChangeAppLanguage(lang) {

    strings.setLanguage(lang);

}
export default strings;