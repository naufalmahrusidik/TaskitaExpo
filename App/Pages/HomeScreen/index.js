import React, { useState } from "react";
import { Text, View, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IcLonceng, IcCheckBox } from '../../assets';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#131B63" }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />

      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
        <View>
          <Text style={styles.textHeader}>Kesit Wijanarko</Text>
          <Text style={styles.textHeader1}>Welcome Back!</Text>
        </View>
        <View style={styles.buttonLonceng}>
          <TouchableOpacity >
            <Image source={IcLonceng} style={styles.imgLonceng} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.bulan}>September</Text>

      <View style={{ paddingHorizontal: 20, paddingTop: 10, flexDirection: 'row' }}>
        <View style={styles.textContainer1}>
          <Text style={styles.text1}>SAT</Text>
          <Text style={styles.text2}>10</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.text1}>SUN</Text>
          <Text style={styles.text2}>11</Text>
        </View>
        <View style={styles.textContainer3}>
          <Text style={styles.text1}>MON</Text>
          <Text style={styles.text2}>12</Text>
        </View>
      </View>

      <View style={styles.body}>
          <Text style={styles.today}>Today's Task</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: '#c972ba',
    fontSize: 20,
  },
  textHeader1: {
    color: '#ffffff',
    fontSize: 25,
    marginTop: -5,
  },
  buttonLonceng: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 110,
    marginRight: 0,
    borderRadius: 7,
    backgroundColor: "white"
  },
  imgLonceng: {
    marginTop: 0,
    height: 5,
    width: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
  },
  bulan: {
    color: '#ffffff',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  textContainer1: {
    flex: 1,
    padding: 10,
    backgroundColor: '#5e1894',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 20,
  },
  textContainer2: {
    flex: 1,
    padding: 10,
    backgroundColor: '#5e1894',
    marginTop: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textContainer3: {
    flex: 1,
    padding: 10,
    backgroundColor: '#5e1894',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 20,
  },
  text1: {
    fontSize: 15,
    color: '#a7a5b7',
    fontFamily: 'Roboto-Reguler',
  },
  text2: {
    fontSize: 40,
    color: '#a7a5b7',
    marginTop: -5,
    fontFamily: 'Roboto-Reguler',
  },
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 35,
    alignItems: 'center',
    alignContent: 'center',
  },
  today: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  body1: {
    flexDirection: 'row',
    marginTop: 30,
  },
  body2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  body3: {
    flexDirection: 'row',
    marginTop: 20,
  },
  body4: {
    flexDirection: 'row',
    marginTop: 20,
  },
  jadwal: {
    marginTop: 20,
    marginRight: 100,
  },
  jam: {
    marginTop: 19,
  },
  checkbox: {
    height: 20,
    width: 20,
    marginLeft: 7,
    marginTop: 2,
  },
  Container: {
    backgroundColor: '#fcf6ff',
    flexDirection: 'row',
    width: 260,
    borderRadius: 10,
    height: 80,
    marginLeft: 10,
  },
  M: {
    backgroundColor: '#F15412',
    width: 52,
    fontSize: 40,
    color: '#ffffff',
    marginTop: 12,
    marginLeft: 16,
    borderRadius: 10,
    paddingLeft: 8,
    height: 52,
    paddingBottom: 2,
  },
  meeting: {
    marginTop: 18,
    fontSize: 20,
    marginLeft: 15,
  },
  line: {
    marginTop: 50,
    marginLeft: -160,
  },
});  