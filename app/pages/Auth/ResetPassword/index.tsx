import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { styles } from "./styles";


export default function ResetPassword() {
  
  const onSubmit = () => {
  };


  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <Text style={styles.title}>Esqueci a senha</Text>

      <Input label="Crie uma nova senha"/>
      <Input label="Confirme a nova senha"/>

      <Button 
        onPress={onSubmit}
        label="Confirmar" 
        labelStyle={{color: "#fff"}}
        customStyle={{ backgroundColor: "#0B132B", marginTop: 35}}
      />
    </View>
  );
}


