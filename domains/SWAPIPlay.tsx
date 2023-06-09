import {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDeviceOrientation} from '@react-native-community/hooks';

interface ItemType {
  id: string;
  title: string;
}

interface ItemComponentProps {
  item: ItemType;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

const DATA: Array<ItemType> = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'people',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'planets',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'starships',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const SWAPIPlay = () => {
  const [counter, setCounter] = useState<number>(1);
  const [selection, setSelection] = useState<string | undefined>(undefined);
  const [typeId, setTypeId] = useState<string>(DATA[0].id);
  const [type, setType] = useState<string>(DATA[0].title);
  const isDarkMode = useColorScheme() === 'dark';

  const getFromSwapi = async (counter: number) => {
    if (type && counter) {
      try {
        const response = await fetch(
          `https://swapi.dev/api/${type}/${counter}/`,
        );
        const json = await response.json();
        setSelection(json.name);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderItem = ({item}: ListRenderItem<ItemType> | null | undefined) => {
    const backgroundColor = item.id === typeId ? 'grey' : 'green'; //'#6e3b6e' : '#f9c2ff';
    const color = item.id === typeId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setTypeId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPushMePressed = () => {
    setCounter(counter + 1);
  };

  const onReset = () => {
    setCounter(1);
    setSelection(undefined);
  };

  const onPushFetchPerson = () => {
    getFromSwapi(counter);
  };

  useEffect(() => {
    setSelection(undefined);
    const typeName = DATA.find(x => x.id === typeId)?.title!;
    setType(typeName);
  }, [typeId]);

  return (
    <SafeAreaView>
      {useDeviceOrientation() === 'portrait' && (
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={type}
            collapsable
            horizontal
          />
        </View>
      )}
      <ScrollView style={backgroundStyle}>
        <Text style={styles.counterText}>Number: {counter}</Text>
        <View style={styles.fixToText}>
          <Button
            color="green"
            onPress={onPushMePressed}
            title="Increase By 1"
          />
          <Button color="red" onPress={onReset} title="Reset" />
          <Button color="blue" onPress={onPushFetchPerson} title="Fetch" />
        </View>
        {selection && (
          <Text style={styles.counterText}>
            Selected {type}: {selection}
          </Text>
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

export default SWAPIPlay;
