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
    ExchangeRow,
    ExchangeText,
    ExchangeBoldText
} from './style';
import { useConverterScreenViewModel } from './converter.vm';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CountryBottomSheet } from '@shared/CountryBottomSheet';
import { maskValue } from '@utils/masks';
import { ModalCurrencyError } from '@shared/ModalCurrencyError';

export function ConverterScreen() {

    const { isVisibleCountryList,
        showList,
        closeList,
        setItems,
        firstCountry,
        secondCountry,
        loadingFirst,
        loadingSecond,
        amountValue,
        setAmountValue,
        convertedValue,
        setConvertedValue,
        setIsEditingAmount,
        isVisibleErrorCurrency,
        handleErrorRequest,
        refreshCurrencyRequest
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
                                            {loadingFirst ?
                                                <ActivityIndicator size={20} color={'#6750A4'} />
                                                :
                                                <TextInputCountry
                                                    value={amountValue ?? ""}
                                                    onChangeText={(text) => {
                                                        setIsEditingAmount(true)
                                                        setAmountValue(maskValue(text));
                                                    }}
                                                    placeholder={"0.00"}></TextInputCountry>
                                            }
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
                                            {loadingSecond ?
                                                <ActivityIndicator size={20} color={'#6750A4'} />
                                                :
                                                <TextInputCountry
                                                    value={convertedValue ?? ""}
                                                    onChangeText={(text) => {
                                                        setIsEditingAmount(false)
                                                        setConvertedValue(maskValue(text));
                                                    }}
                                                    placeholder={"0.00"}></TextInputCountry>
                                            }
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
                    {firstCountry !== null && secondCountry !== null &&
                        <ExchangeView>
                            <ExchangeText>Indicative Exchange Rate</ExchangeText>
                            <ExchangeRow>
                                {loadingFirst ?
                                    <ActivityIndicator size={10} color={'#6750A4'} />
                                    :
                                    <ExchangeBoldText>{amountValue?.length ? amountValue : '0.00'} {firstCountry?.currencies}</ExchangeBoldText>
                                }
                                <ExchangeBoldText> = </ExchangeBoldText>
                                {loadingSecond ?
                                    <ActivityIndicator size={10} color={'#6750A4'} />
                                    :
                                    <ExchangeBoldText>{convertedValue?.length ? convertedValue : '0.00'} {secondCountry?.currencies}</ExchangeBoldText>
                                }
                            </ExchangeRow>
                        </ExchangeView>
                    }

                </ScrollContent>
            </GeralContentView>
            <CountryBottomSheet visible={isVisibleCountryList} onClose={() => closeList()} onCountrySelected={(item) => setItems(item)} onErrorRequestClose={() => handleErrorRequest()} />
            <ModalCurrencyError visible={isVisibleErrorCurrency} onClose={() => handleErrorRequest()} onRetry={() => refreshCurrencyRequest()} />
        </GeralView>

    );
}