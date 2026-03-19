import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value);
}

const StatItem = ({ value, label, color }) => (
    <View style={styles.statItem}>
        <StyledText
            fontWeight='bold'
            style={[styles.statValue, { color: color || theme.colors.primary }]}
        >
            {parseThousands(value)}
        </StyledText>
        <StyledText style={styles.statLabel}>{label}</StyledText>
    </View>
)

const RepositoryStats = (props) => {
    return (
        <View style={styles.container}>
            <StatItem
                value={props.stargazersCount}
                label='Stars'
                color={theme.colors.warning}
            />
            <View style={styles.divider} />

            <StatItem
                value={props.forksCount}
                label='Forks'
                color={theme.colors.success}
            />
            <View style={styles.divider} />

            <StatItem
                value={props.ratingAverage}
                label='Rating'
                color={theme.colors.primaryDark}
            />
            <View style={styles.divider} />

            <StatItem
                value={props.reviewCount}
                label='Reviews'
                color={theme.colors.accent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.lg,
        marginTop: theme.spacing.lg,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: theme.spacing.sm,
    },
    statValue: {
        fontSize: theme.fontSizes.title,
        marginBottom: theme.spacing.xs,
    },
    statLabel: {
        fontSize: theme.fontSizes.body - 2,
        color: theme.colors.textSecondary,
    },
    divider: {
        width: 1,
        backgroundColor: theme.colors.border,
        height: '100%',
        marginHorizontal: theme.spacing.sm,
    },
});

export default RepositoryStats