import * as React from 'react';
import { GeralView, Text } from './style';
import { ActivityIndicator, Button } from 'react-native';
import { useInitialScreenViewModel } from './intial.vm';

export function InitialScreen() {

    const { goConverter, getList,loading } = useInitialScreenViewModel()

    return (
        <GeralView>
            <Text>Initial Screen</Text>
            <Button title="Next Screen" onPress={() => goConverter()}></Button>
            <Button title="Made Request" onPress={() => getList()}></Button>

            {
                loading &&
                <ActivityIndicator size={20}/>
            }
        </GeralView>
    );
}