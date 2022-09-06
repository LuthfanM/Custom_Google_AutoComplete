import React, { useRef, useState } from 'react';
import { API_KEY } from '../../helpers/Configs';
import { LEFT_OPT, RIGHT_OPT } from '../../helpers/Constants';
import { GooglePlacesAutocomplete } from '../containers/GooglePlacesAutocomplete'
import CustomTextInput from './CustomTextInput';
import { Portal, PortalContext } from "@react-native-material/core";
import CustomModal from '../containers/CustomModal';
import { useSelector } from 'react-redux';

const MapInput = (props) => {

    const modalRef = useRef();
    const _textSearchs = useSelector(state=>state.general.typedText)
    const _searchResults = useSelector(state=>state.general.searchResults)

    function manageClickButton(type) {
        if (type == LEFT_OPT) {
            modalRef.current.show(_searchResults, type);
        } else {
            modalRef.current.show(_textSearchs, type);
        }
    }

    return (
        <>
            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key 
                listViewDisplayed={'auto'}    // true/false/undefined
                fetchDetails={true}
                onPress={(data, details = null) => // 'details' is provided when fetchDetails = true
                    {
                    props.notifyChange(details.geometry.location);
                    
                }
                }
                query={{
                    key: API_KEY,
                    language: 'en'
                }}
                textInputProps={{
                    InputComp: CustomTextInput,
                    userProps: {
                        clickLeftButton: manageClickButton
                    }
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />

            <CustomModal ref={modalRef} />
        </>
    );

}
export default MapInput;