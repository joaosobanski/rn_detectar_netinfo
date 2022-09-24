/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import NetInfo from "@react-native-community/netinfo";

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useEffect } from "react";
import { useState } from "react";


const App = () => {
  const [tipo, setTipo] = useState('none');
  const [connected, setConnected] = useState(false);

  useEffect(() => {

    NetInfo.fetch().then(state => {
      setTipo(state.type);
      setConnected(state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setTipo(state.type);
      setConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [])

  const styles = StyleSheet.create({
    text: { fontSize: 18, color: 'black', fontWeight: 'bold' },
    line: { borderBottomWidth: 2, width: '100%' },
    view: { alignItems: 'center', flex: 1, width: '100%' }
  })


  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View style={styles.view}>
          <Text style={styles.text}>Conexão NetInfo teste</Text>
          <View style={styles.line} />
          <Text style={styles.text}>{tipo}</Text>
          <Text style={styles.text}>{connected ? 'conectado' : 'desconectado'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};




export default App;
