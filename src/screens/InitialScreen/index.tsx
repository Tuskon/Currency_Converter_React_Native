import * as React from 'react';
import {
    GeralView,
    GeralContentView,
    TitleView,
    TitleText,
    TitleSloganText,
    ImageConvy,
    ButtonView,
    Button,
    ButtonText
} from './style';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useInitialScreenViewModel } from './intial.vm';

export function InitialScreen() {
    const {
        goConverter,
        getList,
        loading,
        listCountrys,
    } = useInitialScreenViewModel();

    return (
        <GeralView>
            <GeralContentView edges={['top', 'bottom']}>
                <TitleView>
                    <TitleText>Welcome to ConvY</TitleText>
                    <TitleSloganText>"Simple is enough"</TitleSloganText>
                </TitleView>
                <ImageConvy source={require('../../../assets/img/convy.png')} />
                <ButtonView>
                    <TouchableOpacity onPress={()=> goConverter()}>
                        <Button>
                            <ButtonText>Start Converter</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </ButtonView>
            </GeralContentView>
        </GeralView>
    );
}