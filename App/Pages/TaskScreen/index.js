import * as React from 'react';
import { Text, Alert, View, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, FlatList } from 'react-native';
import { IcLonceng, IcPensil } from '../../assets';
import { MiniCard } from '../../Componets'
import { useSelector } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default HomeScreen = ({ navigation }) => {
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
        <TouchableOpacity>
          <Image source={IcLonceng} style={style.loceng} />
        </TouchableOpacity>
      </View>

      <View style={style.bodyContent1}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity
            onPress={() => navigation.navigate("AddNewTaskScreen")}>
            <Image source={IcPensil} style={style.pensil} />
            <Text style={style.Add}>Add New</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={style.Filter}>Filter Task</Text>
          </TouchableOpacity>
        </View>

        <View style={style.bodyContent}>
          <ScrollView style={{ padding: 30 }}>
            <Text style={style.all}>All Task</Text>

            <MiniCard style={style.Mbox}
            />
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
    fontSize: 50,
    marginLeft: 15,
    color: '#A85CA3',
    marginTop: -19,
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
    height: 50,
    width: 50,
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
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 200,
    marginTop: -11,
    marginBottom: 20,
  }
});  