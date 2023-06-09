/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.netStatus}>
          <Button
            color="blue"
            onPress={() => navigation.navigate('SWAPIPlay')}
            title="Go To SWAPIPlay"
          />
        </View>
        <View style={styles.netStatus}>
          <Button
            color="orange"
            onPress={() => navigation.navigate('NetStatus')}
            title="Go To NetStatus"
          />
        </View>
        <View style={styles.netStatus}>
          <Button
            color="purple"
            onPress={() => navigation.navigate('Location')}
            title="Go To Location"
          />
        </View>
        <View style={styles.netStatus}>
          <Button
            color="brown"
            onPress={() => navigation.navigate('Orientation')}
            title="Go To Orientation"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  netStatus: {
    marginTop: 50,
  },
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  counterText: {
    textAlign: 'center',
    fontSize: 25,
    margin: 25,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default Home;
