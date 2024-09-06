import React, { useState } from 'react';
import {
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './styles';


type Props = ModalProps & {
  closeModal?: () => void;
};

export function ForgotPasswordModal({ closeModal = () => null, ...rest }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSendForgotPasswordMail() {
    setLoading(true);
    try {

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Email enviado com sucesso!',
      });

      closeModal();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'OOPS',
        text2: error as string,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Recuperar Senha</Text>
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />

            <TouchableOpacity
              onPress={handleSendForgotPasswordMail}
              activeOpacity={0.8}
              style={styles.button}>
              {loading ? (
                <ActivityIndicator size={17} color={"#fff"} />
              ) : (
                <Text style={styles.buttonText}>Enviar E-mail</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}