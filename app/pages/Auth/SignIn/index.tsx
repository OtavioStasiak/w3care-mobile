import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { styles } from "./styles";
import { ForgotPasswordModal } from "@/app/components/ForgotPasswordModal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/hooks/useAuth";
import Toast from "react-native-toast-message";


export default function SignIn() {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  const [visible, setVisible] = useState(false);
  const navigation = useNavigation()
  const {
    state: { loading },
    dispatch: { signIn }
  } = useAuth();

  const onCreateAccountPress = () => {
      navigation.navigate("Register");
  };

  const handleSignIn = () => {
      signIn(
        signInForm, 
        () => Toast.show({
          type: 'success',
          text1: "Sucesso!",
          text2: "Logado com sucesso."
        }),
        () => Toast.show({
          type: 'error',
          text1: "Oops!",
          text2: "E-mail ou senha incorretos"
        }),
      )
  };

  const onForgotPasswordPress = () => {
    setVisible(true);
  };


  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <Text style={styles.title}>W3 Care</Text>

      <Input 
        label="Email" 
        placeholder="E-mail..." 
        placeholderTextColor={"#c8c8c8"}
        onChangeText={(text) => setSignInForm({
          ...signInForm,
          email: text
        })}
      />

      <Input 
        label="Senha" 
        placeholder="Senha..." 
        placeholderTextColor={"#c8c8c8"}
        onChangeText={(text) => setSignInForm({
          ...signInForm,
          password: text
        })}
      />

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text style={styles.forgotPasswordTitle}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        
        <ForgotPasswordModal 
            visible={visible}
            onRequestClose={() => setVisible(false)} 
            closeModal={() => setVisible(false)}
            success={() => navigation.navigate("ResetPassword")}
        />
      </View>

     
      <Button
        loading={loading}
        onPress={handleSignIn}
        label="Entrar" 
        customStyle={{marginTop: 55}}
      />

      <Text style={styles.or}>OU</Text>

      <Button 
        onPress={onCreateAccountPress}
        label="Crie uma conta" 
        labelStyle={{color: "#fff"}}
        customStyle={{ backgroundColor: "#0B132B"}}
      />
    </View>
  );
}


