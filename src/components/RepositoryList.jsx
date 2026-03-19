import React from "react";
import { Text, FlatList, View, ActivityIndicator, Linking, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import theme from "../theme";

const RepositoryList = ({ language = "javascript", sortBy = "stars" }) => {
    const { repositories, loading, error } = useRepositories(language, sortBy, "desc");

    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
                <Text style={{ marginTop: theme.spacing.lg, color: theme.colors.textSecondary }}>
                    Cargando repositorios...
                </Text>
            </View>
        );
    }

    if (error) {
        const isRateLimit = error.includes('Límite de solicitudes');

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: theme.spacing.lg }}>
                <Text style={{ fontSize: theme.fontSizes.large, fontWeight: theme.fontWeights.bold, color: theme.colors.accent, marginBottom: theme.spacing.md }}>
                    ⚠️ {isRateLimit ? 'Límite Alcanzado' : 'Error'}
                </Text>
                <Text style={{ color: theme.colors.textSecondary, textAlign: 'center', lineHeight: 22, marginBottom: theme.spacing.lg }}>
                    {error}
                </Text>

                {isRateLimit && (
                    <View style={{ width: '100%', gap: theme.spacing.md }}>
                        <Text style={{ color: theme.colors.textSecondary, textAlign: 'center', fontSize: theme.fontSizes.body, lineHeight: 20 }}>
                            Prueba con otro lenguaje o espera unos minutos.
                        </Text>
                        <Text style={{ color: theme.colors.textSecondary, textAlign: 'center', fontSize: theme.fontSizes.body - 2, lineHeight: 18, marginTop: theme.spacing.lg, fontWeight: theme.fontWeights.bold }}>
                            ¿Quieres aumentar los límites?
                        </Text>
                        <Pressable
                            onPress={() => Linking.openURL('https://github.com/settings/tokens')}
                            style={{
                                backgroundColor: theme.colors.primary,
                                paddingVertical: theme.spacing.md,
                                borderRadius: theme.borderRadius.md,
                                alignItems: 'center',
                                marginTop: theme.spacing.md,
                            }}
                        >
                            <Text style={{ color: theme.colors.white, fontWeight: theme.fontWeights.bold }}>
                                Crear GitHub Token
                            </Text>
                        </Pressable>
                    </View>
                )}
            </View>
        );
    }

    if (repositories.length === 0) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: theme.spacing.lg }}>
                <Text style={{ fontSize: theme.fontSizes.title, color: theme.colors.textSecondary }}>
                    No se encontraron repositorios
                </Text>
            </View>
        );
    }

    return (
        <FlatList
            data={repositories}
            contentContainerStyle={{
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.lg,
                gap: theme.spacing.md,
            }}
            ItemSeparatorComponent={() => <View style={{ height: theme.spacing.md }} />}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
        />
    )
}

export default RepositoryList;