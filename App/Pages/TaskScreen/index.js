import * as React from 'react';
import axios from 'axios';
import { Text, Alert, View, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, FlatList } from 'react-native';
import { IcLonceng, IcPensil, IcCheckBox } from '../../assets';
import { useSelector, useDispatch } from "react-redux";
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default TaskScreen = ({ navigation }) => {
  const nama = useSelector((state) => state.user.nama)
  const activedate = useSelector((state) => state.activedate)

  return (
    <SafeAreaView style={{ backgroundColor: '#131B63', flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />

      <View style={style.containerTop}>
        <View>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Info", "Ini adalah nama akun Anda", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Text style={style.textNameStyle}>{nama}</Text>
          </TouchableOpacity>
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
          <Text style={style.all}>All Task</Text>

          <ScrollView style={{ padding: 30 }}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Mohon maaf", "Untuk saat ini masih dalam pengembangan", [
                  {
                    text: "ok",
                    onPress: () => console.log("ok ditekan"),
                  },
                ])
              }>
              <View style={style.itemall}>
                <View style={style.itemdate}>
                  <Image source={IcCheckBox} style={style.gambar1}></Image>
                  <Text style={{ fontSize: 13, marginLeft: -15 }}>10 April 22</Text>
                  <Text style={{ marginLeft: -3, color: '#777878' }}>09.00</Text>
                </View>
                <View style={style.item}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#DC3535', borderRadius: 8, width: 50, marginLeft: 15, marginBottom: -16, marginTop: 11 }}>
                      <Text style={{ fontSize: 40, color: 'white', marginLeft: 7 }}>M</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={style.teksitem}>MEETING WITH CEO</Text>
                      <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 10 }}>
                        <View style={{ backgroundColor: 'red', width: 60, height: 5 }}></View>
                        <View style={{ backgroundColor: '#e4e3ea', width: 75, height: 5 }}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() =>
                Alert.alert("Mohon maaf", "Untuk saat ini masih dalam pengembangan", [
                  {
                    text: "ok",
                    onPress: () => console.log("ok ditekan"),
                  },
                ])
              }>
              <View style={style.itemall}>
                <View style={style.itemdate}>
                  <Image source={IcCheckBox} style={style.gambar1}></Image>
                  <Text style={{ fontSize: 13, marginLeft: -15 }}>30 April 22</Text>
                  <Text style={{ marginLeft: -3, color: '#777878' }}>15.00</Text>
                </View>
                <View style={style.item}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#DC3535', borderRadius: 8, width: 50, marginLeft: 15, marginBottom: -16, marginTop: 11 }}>
                      <Text style={{ fontSize: 40, color: 'white', marginLeft: 7 }}>M</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={style.teksitem}>MEETING WITH Naufal</Text>
                      <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 10 }}>
                        <View style={{ backgroundColor: 'red', width: 60, height: 5 }}></View>
                        <View style={{ backgroundColor: '#e4e3ea', width: 75, height: 5 }}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

           
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
    marginTop: 0,
  },
  textNameStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 15,
    color: '#A85CA3',
    marginTop: 3,
  },
  bodyContent1: {
    height: WINDOW_HEIGHT,
    marginTop: 20,
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
    marginTop: 5
  },
  pensil: {
    width: 20,
    height: 20,
    marginTop: -18,
    marginLeft: 40,
    color: 'white'
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
    marginLeft: 120,
    marginTop: 20,
    marginBottom: -10,
  },
  itemall: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 14
  },
  itemdate: {
    height: 80,
    width: 60,
  },
  gambar1: {
    width: 20,
    height: 20,
    marginLeft: 6
  },
  item: {
    height: 80,
    width: 230,
    backgroundColor: '#EFF5F5',
    borderRadius: 20,
    marginTop: -14
  },
  gambar2: {
    height: 60,
    width: 60,
    marginTop: 10,
    marginLeft: 10
  },
  teksitem: {
    color: 'black',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 14
  }
});  