import * as React from 'react';
import { GeralView, GeralContentView, Text, NameCountrys } from './style';
import { ActivityIndicator, Button } from 'react-native';
import { useInitialScreenViewModel } from './intial.vm';

export function InitialScreen() {

    const {
        goConverter,
        getList,
        loading,
        listCountrys } = useInitialScreenViewModel()

    return (
        <GeralView>
            <GeralContentView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Initial Screen</Text>
                <Button title="Next Screen" onPress={() => goConverter()}></Button>
                <Button title="Made Request" onPress={() => getList()}></Button>

                {
                    loading &&
                    <ActivityIndicator size={20} />
                }

                {listCountrys !== null && listCountrys?.length > 0 && listCountrys?.map((item, index) => (

                    <NameCountrys key={index}>{item.name.common}</NameCountrys>
                ))}


            </GeralContentView>
        </GeralView>
    );
}