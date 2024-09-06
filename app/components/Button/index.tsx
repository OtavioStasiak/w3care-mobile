import React from "react";
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    label: string;
    labelStyle?: TextStyle;
    customStyle?: TextStyle
}

export function Button({label, customStyle, labelStyle, ...rest}: Props) {
    return(
        <TouchableOpacity style={{...styles.container, ...customStyle}} {...rest}>
            <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
        </TouchableOpacity>
    )
}