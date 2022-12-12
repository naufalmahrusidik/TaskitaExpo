import * as React from 'react';
import { Text, View, StatusBar, styles, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
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
          <Text style={style.textWelcome}>{email}</Text>
        </View>
        <View>
          <Image
            source={IcLonceng} style={style.loceng} />
        </View>
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{ color: 'white', marginLeft: 20 }}>{displayMonth}</Text>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50 }}>
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

          <Text style={{ fontSize: 50, marginLeft: 100 }}>KESIT TAMVAN</Text>
          <Text style={{ fontSize: 50, marginLeft: 125, marginTop: 100 }}>@kesit_wjr10</Text>
          <Text style={{ fontSize: 30, marginLeft: 95, marginTop: 300 }}>Copyright - Kesit Wijanarko</Text>

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
    marginTop: 20
  },
  textNameStyle: {
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: 15,
    color: '#A85CA3',
    marginTop: -19,
  },
  textWelcome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
  },
  bodyContent: {
    height: WINDOW_HEIGHT,
    backgroundColor: 'white',
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90
  },
  loceng: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});  