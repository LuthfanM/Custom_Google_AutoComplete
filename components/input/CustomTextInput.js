import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react'
import { Stack, TextInput, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from 'react-native';
import { store } from '../../helpers/redux/store';
import { LEFT_OPT, RIGHT_OPT } from '../../helpers/Constants';

const CustomTextInput = forwardRef((propsX, ref) => {

    return (<>
        <TextInput
            ref={ref}
            style={{
                width: '100%'
            }}
            leading={props => 
            <IconButton onPress={() => propsX.userProps?.clickLeftButton(LEFT_OPT)} icon={props => <Icon name="account" {...props} />} 
            {...props} />}
            trailing={props => (
                <IconButton onPress={() => propsX.userProps?.clickLeftButton(RIGHT_OPT)} icon={props => <Icon name="eye" {...props} />} 
                {...props} />
            )}
            {...propsX}
        />
        </>
    );
});

export default memo(CustomTextInput)