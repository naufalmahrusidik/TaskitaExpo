TaskitaExpo Kesit Wijanarko

AKUN  
EMAIL : kesit123@gmail.com
PW    : kesit123

<View>
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

          <View style={styles.body1}>
            <View styles={styles.jadwal}>
              <Text style={styles.jam}>10:00</Text>
              <Image style={styles.checkbox} source={IcCheckBox}/>
            </View>
            <View style={styles.Container}>
              <Text style={styles.M}>M</Text>
              <Text style={styles.meeting}>Meeting With Ceo</Text>
              <Text style={styles.line}>────────────────</Text>
            </View>
          </View>

          <View style={styles.body2}>
            <View styles={styles.jadwal}>
              <Text style={styles.jam}>10:00</Text>
              <Image style={styles.checkbox} source={IcCheckBox}/>
            </View>
            <View style={styles.Container}>
              <Text style={styles.M}>M</Text>
              <Text style={styles.meeting}>Meeting With Ceo</Text>
              <Text style={styles.line}>────────────────</Text>
            </View>
          </View>

          <View style={styles.body3}>
            <View styles={styles.jadwal}>
              <Text style={styles.jam}>10:00</Text>
              <Image style={styles.checkbox} source={IcCheckBox}/>
            </View>
            <View style={styles.Container}>
              <Text style={styles.M}>M</Text>
              <Text style={styles.meeting}>Meeting With Ceo</Text>
              <Text style={styles.line}>────────────────</Text>
            </View>
          </View>

          <View style={styles.body4}>
            <View styles={styles.jadwal}>
              <Text style={styles.jam}>10:00</Text>
              <Image style={styles.checkbox} source={IcCheckBox}/>
            </View>
            <View style={styles.Container}>
              <Text style={styles.M}>M</Text>
              <Text style={styles.meeting}>Meeting With Ceo</Text>
              <Text style={styles.line}>────────────────</Text>
            </View>
          </View>

        </View>