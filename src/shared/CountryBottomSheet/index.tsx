import * as React from 'react';

import {
  Modal,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  GeralView,
  HeaderView,
  TitleText,
  CloseButton,
  SearchInput,
  CountryRow,
  CountryInfoView,
  CountryFlag,
  CountryName,
  Divider,
  LoadingView,
  ErrorView,
  ErrorCloseView,
  ErrorTitle,
  ErrorSubtitle,
  RetryButton,
  RetryButtonText,
  Overlay,
  BottomSheetContainer
} from './style';

import { useCountryBottomSheetViewModel } from './countryBottomSheet.vm';

interface Props {
  visible: boolean;
  onClose: () => void;
  onErrorRequestClose: () => void;
  onCountrySelected: (country: any) => void;
}

export function CountryBottomSheet({
  visible,
  onClose,
  onErrorRequestClose,
  onCountrySelected,
}: Props) {

  const {
    loading,
    error,
    search,
    filteredCountries,
    updateSearch,
    getCountries
  } = useCountryBottomSheetViewModel();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
    >

      <Overlay>

        <TouchableOpacity style={{ flex: 1, width: '100%' }} onPress={onClose} />

        <BottomSheetContainer error={error}>

          {
            loading ? (
              <GeralView>
                <LoadingView>
                  <ActivityIndicator size={'large'} color={'#6750A4'} />
                </LoadingView>
              </GeralView>
            ) : error ? (
              <GeralView>

                <ErrorView>
                  <ErrorCloseView>
                    <TouchableOpacity onPress={onErrorRequestClose}>
                      <Icon name="close" size={29} color={'black'} />
                    </TouchableOpacity>
                  </ErrorCloseView>

                  <Icon name="error-outline" size={80} color={'red'} />

                  <ErrorTitle>Failed to retrieve the country list</ErrorTitle>

                  <ErrorSubtitle>Try again ?</ErrorSubtitle>

                  <TouchableOpacity onPress={getCountries}>
                    <RetryButton>

                      <Icon name="rotate-left" size={24} color={'white'} />

                    </RetryButton>
                  </TouchableOpacity>

                </ErrorView>

              </GeralView>
            ) : (
              <View style={{ flex: 1 }}>

                <HeaderView>

                  <TitleText>Select a country</TitleText>

                  <TouchableOpacity onPress={onClose}>
                    <CloseButton>

                      <Icon name="close" size={22} color={'black'} />

                    </CloseButton>
                  </TouchableOpacity>

                </HeaderView>

                <SearchInput
                  placeholder="Search for a country..."
                  placeholderTextColor={'#808080'}
                  value={search}
                  onChangeText={updateSearch}
                />

                <FlatList
                  data={filteredCountries}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 40,
                  }}
                  renderItem={({ item }) => (
                    <>

                      <TouchableOpacity
                        onPress={() => { onCountrySelected(item) }}
                      >

                        <CountryRow>

                          <CountryInfoView>

                            <CountryFlag source={{ uri: item.flagPng }} />

                            <CountryName>{item.name}</CountryName>

                          </CountryInfoView>

                        </CountryRow>

                      </TouchableOpacity>

                      <Divider />

                    </>
                  )}
                />

              </View>
            )
          }

        </BottomSheetContainer>

      </Overlay>

    </Modal>
  );
}