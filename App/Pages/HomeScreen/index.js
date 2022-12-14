import * as React from 'react';
import { Text, View, StatusBar, styles, Alert, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { IcLonceng, IcCheckBox } from '../../assets';
import { MiniCard } from '../../Componets'
import { useSelector, useDispatch } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default HomeScreen = () => {
  const nama = useSelector((state) => state.user.nama)
  const email = useSelector((state) => state.user.email)
  const month = useSelector((state) => state.config.bulan)
  const day = useSelector((state) => state.config.hari)
  const curDate = new Date();
  const hari = curDate.getDay();
  const curMonth = curDate.getMonth();

  const hariSekarang = day[hari];
  const hariBesok = day[hari + 1];
  const hariLusa = day[hari + 2];

  const tglSekarang = curDate.getDate();
  const tglBesok = tglSekarang + 1;
  const tglLusa = tglSekarang + 2;

  const displayMonth = month[curMonth];

  const onPresDate = (date) => {
    alert('tes' + date)
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#131B63', flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />

      <View style={style.containerTop}>
        <View >
          <Text style={style.textNameStyle}>{nama}</Text>
          <Text style={style.textEmail}>{email}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Mohon maaf", "Untuk saat ini tidak ada Notifikasi masuk", [
              {
                text: "ok",
                onPress: () => console.log("ok ditekan"),
              },
            ])
          }>
          <Image source={IcLonceng} style={style.lonceng} />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ color: 'white', marginLeft: 5, marginTop: 20 }}>{displayMonth}</Text>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
          <MiniCard
            isActive={true}
            day={hariSekarang}
            date={tglSekarang}
            onPress={() => onPresDate(tglSekarang)} />

          <MiniCard
            day={hariBesok}
            date={tglBesok}
            onPress={() => onPresDate(tglBesok)} />

          <MiniCard
            day={hariLusa}
            date={tglLusa}
            onPress={() => onPresDate(tglLusa)} />

        </View>
      </View>

      <View style={style.bodyContent}>
        <ScrollView style={{ padding: 30 }}>
          <Text style={{ fontSize: 20, marginLeft: 60 }}>KESIT WIAJANARKO</Text>
          <Text style={{ fontSize: 20, marginLeft: 90, marginTop: 100 }}>@kesit_wjr10</Text>
          <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 110 }}>Copyright - Kesit Wijanarko</Text>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 0
  },
  textNameStyle: {
    fontWeight:'bold',
    fontSize:25,
    color:'#A85CA3',
    marginLeft: 10,
  },
  textEmail: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
  bodyContent: {
    height: WINDOW_HEIGHT,
    backgroundColor: 'white',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60
  },
  lonceng: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    height: 40,
    width: 40,
    borderRadius: 10,
    marginTop: 5
  },
});  