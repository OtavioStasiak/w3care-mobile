import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { styles } from "./styles";
import { ForgotPasswordModal } from "@/app/components/ForgotPasswordModal";
import { useState } from "react";


export default function SignIn() {
  const [visible, setVisible] = useState(false);

  const onCreateAccountPress = () => {

  };

  const handleSignIn = () => {
    
  };

  const onForgotPasswordPress = () => {
    setVisible(true);
  };


  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <Text style={styles.title}>W3 Care</Text>

      <Input label="Email" placeholder="E-mail..." placeholderTextColor={"#c8c8c8"}/>
      <Input label="Senha" placeholder="Senha..." placeholderTextColor={"#c8c8c8"}/>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text style={styles.forgotPasswordTitle}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <ForgotPasswordModal 
            visible={visible}
            onRequestClose={() => setVisible(false)} 
            closeModal={() => setVisible(false)}
        />
      </View>

     
      <Button
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


