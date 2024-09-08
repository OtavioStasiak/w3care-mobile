import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/app/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/hooks/useAuth";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

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
        <Text style={styles.title}>Bem vindo, {user.name}!</Text>
        <TouchableOpacity onPress={handleGoToMenu} activeOpacity={0.9}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.psychologistContainer}>
        <Text>Seu psicólogo</Text>
        <Text>{user?.patient?.psychologist?.user?.name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          loading={loading}
          onPress={handleCopyCode}
          label="copiar código da sala"
        />
      </View>
    </View>
  );
}
