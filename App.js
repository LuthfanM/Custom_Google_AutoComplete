import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapContainer from './components/containers/MapContainer';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import { store } from './helpers/redux/store';
import { Provider as Providers } from 'react-native-paper';

import './services/RNLocation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {

  return (
    <Providers>
      <Provider store={store}>
        <View style={styles.container}>
          <MapContainer />
        </View>
      </Provider>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight
  },
});
