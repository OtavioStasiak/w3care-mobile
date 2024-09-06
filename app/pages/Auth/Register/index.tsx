import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { styles } from "./styles";
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  description: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const { control, watch, handleSubmit,  formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
  };

  const password = watch('password');

  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <Text style={styles.title}>W3 Care</Text>

      <Controller
        control={control}
        rules={{ required: 'Nome é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Nome"
            placeholder="Nome"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.error}>{errors?.name?.message}</Text>}

      <Controller
        control={control}
        rules={{ required: 'CPF é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="CPF"
            placeholder="cpf"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="cpf"
      />
      {errors?.cpf && <Text style={styles.error}>{errors?.cpf?.message}</Text>}
    
      <Controller
        control={control}
        rules={{ required: 'Email é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            placeholder="Email"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors?.email?.message}</Text>}
    
      <Controller
        control={control}
        rules={{ required: 'Data de nascimento é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Data de nascimento"
            placeholder="00/00/0000"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
           
          />
        )}
        name="birthDate"
      />
      {errors?.birthDate && <Text style={styles.error}>{errors?.birthDate?.message}</Text>}
    
      <Controller
        control={control}
        rules={{ required: 'Descrição é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Breve resumo sobre você..."
            placeholderTextColor={"#c8c8c8"}
            label="Descrição"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            
          />
        )}
        name="description"
      />
      {errors?.description && <Text style={styles.error}>{errors?.description?.message}</Text>}
    
      <Controller
        control={control}
        rules={{ required: 'Senha é obrigatório' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Senha"
            placeholder="Senha"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
           
          />
        )}
        name="password"
      />
      {errors?.password && <Text style={styles.error}>{errors?.password?.message}</Text>}
    
      <Controller
        control={control}
        rules={{ 
          required: 'Confirme sua senha',
          validate: value => value === password || 'As senhas não coincidem'
         }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Confirme sua Senha"
            placeholder="Confirme sua senha"
            placeholderTextColor={"#c8c8c8"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors?.password && <Text style={styles.error}>{errors?.password?.message}</Text>}
     

      <Button 
        onPress={handleSubmit(onSubmit)}
        label="Continue" 
        labelStyle={{color: "#fff"}}
        customStyle={{ backgroundColor: "#0B132B", marginTop: 35}}
      />
    </View>
  );
}


