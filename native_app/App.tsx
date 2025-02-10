/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {useStore, StoreApi} from 'zustand';

import type {Store} from 'MyRemote/store';

function StoreButtons({store}: {store: StoreApi<Store>}) {
  const {count, increment, decrement, reset} = useStore(store);
  return (
    <View>
      <Text style={styles.count}>Count: {count}</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={styles.button}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text style={styles.button}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text style={styles.button}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

function StoreWrapper() {
  const [store, setStore] = useState<StoreApi<Store>>();
  useEffect(() => {
    import('MyRemote/store').then(module => setStore(module.store));
  }, []);

  if (!store) return null;

  return <StoreButtons store={store} />;
}

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <StoreWrapper />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  button: {
    fontSize: 18,
    fontWeight: '600',
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
