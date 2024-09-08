import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/app/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/hooks/useAuth";
import Toast from "react-native-toast-message";
import * as Clipboard from "expo-clipboard";

export function Home() {
  const navigation = useNavigation();
  const {
    state: { user },
  } = useAuth();

  const handleGoToMenu = () => {
    navigation.navigate("Profile");
  };

  const [loading, setLoading] = useState(false);

  const handleCopyCode = async () => {
    setLoading(true);
    try {
      await Clipboard.setStringAsync("DYXI-2201");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Sucesso!",
        text2: "Texto copiado com sucesso.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem vindo, {user?.name}!</Text>
        <TouchableOpacity onPress={handleGoToMenu} activeOpacity={0.9}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.psychologistContainer}>
        <Text>Seu paciente</Text>
        <Text>{user?.psychologist?.patients?.[0]?.name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          loading={loading}
          onPress={handleCopyCode}
          label="copiar código da sala"
          customStyle={{
            backgroundColor: "#0B132B",
          }}
          labelStyle={{ color: "#fff" }}
        />
      </View>
    </View>
  );
}
