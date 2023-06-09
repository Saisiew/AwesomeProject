import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Geolocation, {
  GeolocationConfiguration,
  GeolocationOptions,
} from '@react-native-community/geolocation';

const Location = () => {
  const [locationInfo, setLocationInfo] = useState<string | undefined>(
    undefined,
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const config: GeolocationConfiguration = {
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    locationProvider: 'android',
  };

  Geolocation.setRNConfiguration(config);

  const options: GeolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: undefined,
  };

  const onGetLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords);
        setLocationInfo(
          `${position.coords.latitude},${position.coords.longitude}`,
        );
      },
      undefined,
      options,
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={backgroundStyle}>
        <Button color="purple" onPress={onGetLocation} title="Getlocation" />
        {locationInfo && (
          <Text style={styles.counterText}>Location Info: {locationInfo}</Text>
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

export default Location;
