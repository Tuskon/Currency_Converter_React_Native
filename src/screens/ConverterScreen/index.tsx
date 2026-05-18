import * as React from 'react';
import {
    GeralView,
    GeralContentView,
    ScrollContent,
    Text
} from './style';
import { useConverterScreenViewModel } from './converter.vm';
import { ActivityIndicator, Button, View } from 'react-native';

export function ConverterScreen() {

    const { goInitial,
        getList,
        listCountrys,
        loading
    } = useConverterScreenViewModel()

    return (
        <GeralView>
            <GeralContentView>
                <ScrollContent
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text>Converter Screen</Text>
                    <Button title='Go Back' onPress={() => goInitial()}></Button>

                    <View style={{ marginTop: 10 }}>
                        <Button title='Made Request' onPress={() => getList()}></Button>
                    </View>

                    {loading &&
                        <ActivityIndicator size={30} style={{ marginTop: 10 }} />
                    }

                    {listCountrys && !loading && listCountrys.length > 0 &&
                        listCountrys.map((item, index) => (
                            <Text key={index}>{item.name.common}</Text>
                        ))
                    }
                </ScrollContent>
            </GeralContentView>
        </GeralView>
    );
}