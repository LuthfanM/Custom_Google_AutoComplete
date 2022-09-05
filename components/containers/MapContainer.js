import React, {
    useEffect,
    useState,
} from 'react';
import { View } from 'react-native';
import MapInput from '../input/MapInput';
import MyMapView from './MyMapView';
import { useDispatch } from 'react-redux';
import GetLocation from 'react-native-get-location'
import {resetGeneral} from '../../helpers/redux/reducers/general';
import { getLocation, geocodeLocationByName } from '../../services/location-service';

const MapContainer = () => {
    const [region, setRegion] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetGeneral());
        getInitialState()
    }, [])

    function getInitialState() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
            })
            .catch(error => {
                const { code, message } = error;
                console.log("error", message);
            })
        // getLocation().then(
        //     (data) => {
        //         console.log(data);
        //         this.setState({
        //             region: {
        //                 latitude: data.latitude,
        //                 longitude: data.longitude,
        //                 latitudeDelta: 0.003,
        //                 longitudeDelta: 0.003
        //             }
        //         });
        //     }
        // );
    }

    function getCoordsFromName(loc) {
        setRegion({
            latitude: loc.lat,
            longitude: loc.lng,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
        });
    }

    function onMapRegionChange(region) {
        setRegion({ region });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapInput notifyChange={(loc) => getCoordsFromName(loc)}
                />
            </View>

            {
                region['latitude'] ?
                    <View style={{ flex: 1 }}>
                        <MyMapView
                            region={region}
                            onRegionChange={(reg) => onMapRegionChange(reg)} />
                    </View> : null}
        </View>
    );

}

export default MapContainer;