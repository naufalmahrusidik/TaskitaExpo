import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { IcLonceng, IcPensil } from '../../assets';
import { MiniCard } from '../../Componets'
import { useSelector } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default HomeScreen = () => {
  const nama = useSelector((state) => state.user.nama)

  return (
    <SafeAreaView style={{ backgroundColor: '#131B63', flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />

      <View style={style.containerTop}>
        <View>
          <Text style={style.textNameStyle}>{nama}</Text>
        </View>
        <View>
          <Image
            source={IcLonceng} style={style.loceng} />
        </View>
      </View>

      <View style={style.bodyContent1}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              source={IcPensil} style={style.pensil} />
            <Text style={style.Add}>Add New</Text>
          </View>

          <View>
            <Text style={style.Filter}>Filter Task</Text>
          </View>
        </View>

        <View style={style.bodyContent}>
          <ScrollView style={{ padding: 30 }}>
            <Text style={style.all}>All Task</Text>

            <MiniCard style={style.Mbox}
              isActive={true} />
            <MiniCard
              isActive={true} />

          </ScrollView>
        </View>
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
    fontSize: 30,
    color: '#A85CA3'
  },
  bodyContent1: {
    height: WINDOW_HEIGHT,
    marginTop: 20,
    paddingTop: 90,
    backgroundColor: '#d975bb',
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90
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
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  pensil: {
    width: 25,
    height: 25,
    marginTop: -50,
    marginLeft: 55,
  },
  Add: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -25,
    marginLeft: 90
  },
  Filter: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -50,
    marginLeft: 280,
    marginBottom: 20,
  },
  all: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 200,
    marginTop: -11,
    marginBottom: 20,
  }
});  