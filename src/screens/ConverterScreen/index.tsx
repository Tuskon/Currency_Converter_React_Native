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
    CountryFlag,
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
import { CountryBottomSheet } from '@shared/CountryBottomSheet';

export function ConverterScreen() {

    const { isVisibleCountryList,
        showList,
        closeList,
        setItems,
        firstCountry,
        secondCountry
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
                            {firstCountry !== null ?
                                <ViewAmout marginBottom={20}>
                                    <AmountTitleText>Amount</AmountTitleText>
                                    <RowView>
                                        <TouchableOpacity onPress={() => showList(true)}>
                                            <SelectionRowView>
                                                <CountryFlag source={{ uri: firstCountry.flagPng }} />
                                                <SelectionCountryTextView>
                                                    <SelectionCountryText>{firstCountry.currencies}</SelectionCountryText>
                                                    <MaterialIcons name='keyboard-arrow-down' size={25} color={'#3C3C3C'} />
                                                </SelectionCountryTextView>
                                            </SelectionRowView>
                                        </TouchableOpacity>

                                        <InputRowView>
                                            <TextInputCountry placeholder={"0.00"}></TextInputCountry>
                                        </InputRowView>
                                    </RowView>
                                </ViewAmout>
                                :
                                <TouchableOpacity onPress={() => showList(true)}>
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

                            {secondCountry !== null ?
                                <ViewAmout marginTop={20}>
                                    <AmountTitleText>Converted Amount</AmountTitleText>
                                    <RowView>
                                        <TouchableOpacity onPress={() => showList(false)}>
                                            <SelectionRowView>
                                                <CountryFlag source={{ uri: secondCountry.flagPng }} />
                                                <SelectionCountryTextView>
                                                    <SelectionCountryText>{secondCountry.currencies}</SelectionCountryText>
                                                    <MaterialIcons name='keyboard-arrow-down' size={25} color={'#3C3C3C'} />
                                                </SelectionCountryTextView>
                                            </SelectionRowView>
                                        </TouchableOpacity>

                                        <InputRowView>
                                            <TextInputCountry placeholder={"0.00"}></TextInputCountry>
                                        </InputRowView>

                                    </RowView>
                                </ViewAmout>
                                :
                                <TouchableOpacity onPress={() => showList(false)}>
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
            <CountryBottomSheet visible={isVisibleCountryList} onClose={() => closeList()} onCountrySelected={(item) => setItems(item)} />
        </GeralView>

    );
}