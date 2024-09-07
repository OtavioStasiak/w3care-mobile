import React from "react";
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    label: string;
    loading?: boolean;
    labelStyle?: TextStyle;
    customStyle?: TextStyle;
}

export function Button({label, loading = false, customStyle, labelStyle, ...rest}: Props) {
    return(
        <TouchableOpacity style={{...styles.container, ...customStyle}} {...rest}>
            {
                loading
                ?
                <ActivityIndicator color={"#fff"}/>
                :
                <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
            }
        </TouchableOpacity>
    )
}