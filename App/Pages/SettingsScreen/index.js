import * as React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {
  IconLock,
  IconMail
} from '../../assets'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../reducer/CounterReducer'

const CardView = ()=>{
  return (
    <View style={{
      flexDirection:"row", 
      padding:14,
      borderBottomWidth:2,
      borderBottomColor:"#F9F9F9", 
      backgroundColor:"white"}}>
      <View style={{flex:1, alignContent:"center"}}>
          <Image source={IconMail} style={{width: 30, height: 30}}/>
      </View>
      <View style={{flex:5}}>
        <Text style={{fontSize:16, fontWeight:"bold"}}>Account Name</Text>
        <Text>nama</Text>
      </View>
    </View>
  )
}

export default SettingsScreen = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <View style={{flex: 1}}>
      <CardView/>
      <CardView/>

      <Text>{count}</Text>

      <Button
        onPress={()=>dispatch(increment())}
        title="Tambah"
        color="#841584"
        accessibilityLabel="Tambah"
      />

      <Button
        onPress={()=>dispatch(decrement())}
        title="Kurang"
        color="#841584"
        accessibilityLabel="Kurang"
      />
    </View>
  );
};
