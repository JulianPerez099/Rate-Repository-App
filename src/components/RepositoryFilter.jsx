import React from 'react';
import { View, ScrollView, Pressable, StyleSheet, Text } from 'react-native';
import theme from '../theme';
import StyledText from './StyledText';

const RepositoryFilter = ({ selectedLanguage, selectedSort, onLanguageChange, onSortChange }) => {
    const languages = [
        // { label: 'Todos', value: '' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'Python', value: 'python' },
        { label: 'Java', value: 'java' },
        { label: 'Go', value: 'go' },
        { label: 'Rust', value: 'rust' },
        { label: 'C++', value: 'c%2B%2B' },
    ];

    const sortOptions = [
        { label: '⭐ Estrellas', value: 'stars' },
        { label: '🔀 Forks', value: 'forks' },
        { label: '🆕 Recientes', value: 'updated' },
    ];

    return (
        <View style={styles.container}>
            {/* Lenguajes */}
            <View style={styles.filterSection}>
                <StyledText fontWeight='bold' style={styles.filterTitle}>
                    Lenguaje
                </StyledText>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {languages.map((lang) => (
                        <Pressable
                            key={lang.value}
                            onPress={() => onLanguageChange(lang.value)}
                            style={[
                                styles.filterButton,
                                selectedLanguage === lang.value && styles.filterButtonActive,
                            ]}
                        >
                            <StyledText
                                style={[
                                    styles.filterButtonText,
                                    selectedLanguage === lang.value && styles.filterButtonTextActive,
                                ]}
                            >
                                {lang.label}
                            </StyledText>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            {/* Ordenamiento */}
            <View style={styles.filterSection}>
                <StyledText fontWeight='bold' style={styles.filterTitle}>
                    Ordenar por
                </StyledText>
                <View style={styles.sortOptions}>
                    {sortOptions.map((sort) => (
                        <Pressable
                            key={sort.value}
                            onPress={() => onSortChange(sort.value)}
                            style={[
                                styles.sortButton,
                                selectedSort === sort.value && styles.sortButtonActive,
                            ]}
                        >
                            <StyledText
                                style={[
                                    styles.sortButtonText,
                                    selectedSort === sort.value && styles.sortButtonTextActive,
                                ]}
                            >
                                {sort.label}
                            </StyledText>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.lg,
        backgroundColor: theme.colors.white,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    filterSection: {
        marginBottom: theme.spacing.lg,
    },
    filterTitle: {
        marginBottom: theme.spacing.md,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textPrimary,
    },
    scrollContent: {
        paddingRight: theme.spacing.lg,
    },
    filterButton: {
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        borderRadius: theme.borderRadius.xl,
        backgroundColor: theme.colors.background,
        marginRight: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    filterButtonActive: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    filterButtonText: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeights.normal,
    },
    filterButtonTextActive: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
    },
    sortOptions: {
        flexDirection: 'row',
        gap: theme.spacing.md,
    },
    sortButton: {
        flex: 1,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.border,
        alignItems: 'center',
    },
    sortButtonActive: {
        backgroundColor: theme.colors.primaryLight,
        borderColor: theme.colors.primaryLight,
    },
    sortButtonText: {
        fontSize: theme.fontSizes.body - 2,
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeights.normal,
    },
    sortButtonTextActive: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
    },
});

export default RepositoryFilter;
