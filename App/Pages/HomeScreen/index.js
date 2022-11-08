import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IcLonceng } from '../../assets';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#131B63" }}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />

      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
        <View>
          <Text style={styles.textHeader}>Samanta Anna</Text>
          <Text style={styles.textHeader1}>Welcom Back</Text>
        </View>
        <TouchableOpacity style={styles.buttonLonceng}>
          <Image source={IcLonceng} style={styles.imgLonceng} />
        </TouchableOpacity>
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

      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ffffff', borderTopLeftRadius: 50, borderTopRightRadius: 50, marginTop: 35 }}>
        <Text style={styles.today}>Today's Task</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: '#c972ba',
    fontSize: 25,
  },
  textHeader1: {
    color: '#ffffff',
    fontSize: 25,
    marginTop: -5,
  },
  imgLonceng: {
    resizeMode: "contain",
    marginTop: 11,
    height: 25,
    paddingHorizontal: 10,
    paddingVertical: 23,
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#ffffff'
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
  },
  text2: {
    fontSize: 40,
    color: '#a7a5b7',
    marginTop: -5,
  },
  today: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});  