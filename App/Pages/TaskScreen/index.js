import * as React from 'react';
import { Text, Alert, View, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, FlatList } from 'react-native';
import { IcLonceng, IcPensil } from '../../assets';
import { MiniCard } from '../../Componets'
import { useSelector } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default TaskScreen = ({ navigation }) => {
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

      <View style={style.bodyContent1}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddNewTaskScreen")}>
            <Image source={IcPensil} style={style.pensil} />
            <Text style={style.Add}>Add New</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert("Mohon maaf", "Fitur ini masih dalam pengembangan", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Text style={style.Filter}>Filter Task</Text>
          </TouchableOpacity>
        </View>

        <View style={style.bodyContent}>
          <ScrollView style={{ padding: 30 }}>
            <Text style={style.all}>All Task</Text>
          </ScrollView>
        </View>
      </View>



    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 0
  },
  textNameStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 100,
    color: '#A85CA3',
    marginTop: 19,
  },
  bodyContent1: {
    height: WINDOW_HEIGHT,
    marginTop: 70,
    paddingTop: 40,
    backgroundColor: '#d975bb',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60
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
  },
  pensil: {
    width: 20,
    height: 20,
    marginTop: -18,
    marginLeft: 40,
  },
  Add: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft: 65
  },
  Filter: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -18,
    marginLeft: 120,
    paddingBottom: 20
  },
  all: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 90,
    marginTop: -11,
    marginBottom: 20,
  }
});  