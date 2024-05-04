import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    textAlignCenter: {
        textAlign: "center",
    },
});

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyle = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        align === "center" && styles.textAlignCenter,
        style,
    ];

    return <Text style={textStyle} {...restOfProps}>{children}</Text>;
}