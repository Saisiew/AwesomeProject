import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const NetStatus = () => {
  const [netStatus, setNetStatus] = useState<string | undefined>(undefined);
  const isDarkMode = useColorScheme() === 'dark';

  NetInfo.fetch().then(state => {
    setNetStatus(
      `${state.isConnected ? 'online' : 'offline'}-${
        state.type ? state.type : ''
      }`,
    );
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <ScrollView style={backgroundStyle}>
        {netStatus && (
          <Text style={styles.counterText}>Network Status: {netStatus}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default NetStatus;
