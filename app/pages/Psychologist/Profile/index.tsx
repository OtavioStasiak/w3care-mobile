import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAuth } from "@/app/hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const {
    state: { user },
  } = useAuth();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowLeft}
        >
          <MaterialCommunityIcons name="arrow-left" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Meu perfil</Text>
      </View>
      <Text style={styles.label}>Nome</Text>
      <View style={styles.data}>
        <Text>{user.name}</Text>
      </View>

      <Text style={styles.label}>CRP</Text>
      <View style={styles.data}>
        <Text>{user.psychologist?.cpf}</Text>
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.data}>
        <Text>{user.email}</Text>
      </View>

      <Text style={styles.label}>Telefone</Text>
      <View style={styles.data}>
        <Text>{user.phone}</Text>
      </View>
    </View>
  );
}
