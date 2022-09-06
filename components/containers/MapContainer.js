import React, {
    useEffect,
    useState,
} from 'react';
import { View } from 'react-native';
import MapInput from '../input/MapInput';
import MyMapView from './MyMapView';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { resetGeneral } from '../../helpers/redux/reducers/general';
import RNLocation from 'react-native-location';
import { getRegionForCoordinates } from '../../helpers/utils';

const MapContainer = () => {
    const [region, setRegion] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetGeneral());
        getInitialStated();
        // getInitialState()
    }, [])

    const getInitialStated = async () => {
        let permission = await RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine",
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        })

        if (!permission) {
            permission = await RNLocation.requestPermission({
                ios: "whenInUse",
                android: {
                    detail: "coarse",
                    rationale: {
                        title: "We need to access your location",
                        message: "We use your location to show where you are on the map",
                        buttonPositive: "OK",
                        buttonNegative: "Cancel"
                    }
                }
            })
            location = await RNLocation.getLatestLocation({
                timeout: 100, enableHighAccuracy: true,
                maximumAge: 1000,
            })
            // console.log(location, location.longitude, location.latitude,
            //     location.timestamp)
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            });
        } else {
            let location = await RNLocation.getLatestLocation({
                timeout: 100, enableHighAccuracy: true,
                maximumAge: 1000,
            })
            let point = getRegionForCoordinates(location)

            setRegion({
                latitude: point.latitude,
                longitude: point.longitude,
                latitudeDelta: point.latitudeDelta,
                longitudeDelta: point.longitudeDelta
            });
        }
    }

    const getCoordsFromName = (loc) => {
        console.log("nilai" + JSON.stringify(loc))
        setRegion({
            latitude: loc.lat,
            longitude: loc.lng,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
        });
    }

    function onMapRegionChange(region) {
        setRegion({
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .1 }}>
                <MapInput notifyChange={(loc) => getCoordsFromName(loc)}
                />
            </View>
            {
                region['latitude'] ?
                    <View style={{ flex: .9, zIndex: -9999 }}>
                        <MyMapView
                            region={region}
                            onRegionChange={(reg) => onMapRegionChange(reg)} />
                    </View> : null}                
        </View>
    );

}

export default MapContainer;