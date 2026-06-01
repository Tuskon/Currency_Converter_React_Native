import * as React from 'react';
import {
  Modal,
  TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Overlay,
  ModalContainer,
  CloseView,
  TextErrorBold,
  TextError,
  RetryView
} from './style';

interface Props {
  visible: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export function ModalCurrencyError({
  visible,
  onClose,
  onRetry,
}: Props) {

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
    >

      <Overlay>

        <ModalContainer>

          <CloseView>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name='close' size={25} color={'gray'} />
            </TouchableOpacity>
          </CloseView>

          <MaterialIcons name='info-outline' size={50} color={'red'} style={{ marginTop: 15 }} />

          <TextErrorBold>Failed to retrieve conversion value</TextErrorBold>

          <TextError>Try again ?</TextError>

          <TouchableOpacity onPress={onRetry}>
            <RetryView>
              <MaterialIcons name='rotate-left' color={"white"} size={25} />
            </RetryView>
          </TouchableOpacity>

        </ModalContainer>

      </Overlay>

    </Modal>
  );
}