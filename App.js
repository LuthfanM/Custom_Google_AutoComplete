import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapContainer from './components/containers/MapContainer';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import { store } from './helpers/redux/store';
import { Provider as Providers } from 'react-native-paper';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

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
