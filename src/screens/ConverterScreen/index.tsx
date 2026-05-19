import * as React from 'react';
import {
    GeralView,
    GeralContentView,
    ScrollContent,
    EmptySelectionCountryText,
    TitleView,
    TitleText,
    TitleSloganText,
    CardSelectionView,
    InnerCardSelectionView,
    LineRowView,
    Line,
    Circle,
    ViewAmout,
    AmountTitleText,
    RowView,
    SelectionRowView,
    CircleCountryView,
    SelectionCountryTextView,
    SelectionCountryText,
    InputRowView,
    TextInputCountry,
    ExchangeView,
    ExchangeText,
    ExchangeBoldText
} from './style';
import { useConverterScreenViewModel } from './converter.vm';
import { ActivityIndicator, Button, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
                    <TitleView>
                        <TitleText>Currency Converter</TitleText>
                        <TitleSloganText>Check live rates, set rate alerts, receive notifications and more.</TitleSloganText>
                    </TitleView>

                    <CardSelectionView>
                        <InnerCardSelectionView>
                            {true ?
                                <ViewAmout marginBottom={20}>
                                    <AmountTitleText>Amount</AmountTitleText>
                                    <RowView>
                                        <TouchableOpacity>
                                            <SelectionRowView>
                                                <CircleCountryView />
                                                <SelectionCountryTextView>
                                                    <SelectionCountryText>DDD</SelectionCountryText>
                                                    <MaterialIcons name='keyboard-arrow-down' size={25} color={'#3C3C3C'} />
                                                </SelectionCountryTextView>
                                            </SelectionRowView>
                                        </TouchableOpacity>

                                        <InputRowView>
                                            <TextInputCountry></TextInputCountry>
                                        </InputRowView>
                                    </RowView>
                                </ViewAmout>
                                :
                                <TouchableOpacity>
                                    <EmptySelectionCountryText marginBottom={20}>Select First Country</EmptySelectionCountryText>
                                </TouchableOpacity>
                            }

                            <LineRowView>
                                <Line />
                                <Circle>
                                    <MaterialIcons name='swap-vert' size={25} color={'white'} />
                                </Circle>
                                <Line />
                            </LineRowView>

                            {true ?
                                <ViewAmout marginTop={20}>
                                    <AmountTitleText>Converted Amount</AmountTitleText>
                                    <RowView>
                                        <TouchableOpacity>
                                            <SelectionRowView>
                                                <CircleCountryView />
                                                <SelectionCountryTextView>
                                                    <SelectionCountryText>DDD</SelectionCountryText>
                                                    <MaterialIcons name='keyboard-arrow-down' size={25} color={'#3C3C3C'} />
                                                </SelectionCountryTextView>
                                            </SelectionRowView>
                                        </TouchableOpacity>

                                        <InputRowView>
                                            <TextInputCountry></TextInputCountry>
                                        </InputRowView>

                                    </RowView>
                                </ViewAmout>
                                :
                                <TouchableOpacity>
                                    <EmptySelectionCountryText marginTop={20}>Select Second Country</EmptySelectionCountryText>
                                </TouchableOpacity>
                            }

                        </InnerCardSelectionView>
                    </CardSelectionView>

                    <ExchangeView>
                        <ExchangeText>Indicative Exchange Rate</ExchangeText>
                        <ExchangeBoldText>1 DDD = 1.36 DDD</ExchangeBoldText>
                    </ExchangeView>

                </ScrollContent>
            </GeralContentView>
        </GeralView>
    );
}