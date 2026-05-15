import * as React from 'react';
import { GeralView, Text } from './style';
import { useConverterScreenViewModel } from './converter.vm';
import { Button } from 'react-native';

export function ConverterScreen() {

    const { goInitial } = useConverterScreenViewModel()

    return (
        <GeralView>
            <Text>Converter Screen</Text>
            <Button title='Go Back' onPress={() => goInitial()}></Button>
        </GeralView>
    );
}