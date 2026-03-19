import React, { useState } from "react"
import Constants from "expo-constants"
import { Text, View } from "react-native"
import RepositoryList from "./RepositoryList"
import RepositoryFilter from "./RepositoryFilter"
import theme from "../theme"

const Main = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [selectedSort, setSelectedSort] = useState("stars");

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                marginTop: Constants.statusBarHeight,
            }}
        >
            <View
                style={{
                    backgroundColor: theme.colors.primary,
                    paddingHorizontal: theme.spacing.lg,
                    paddingVertical: theme.spacing.xl,
                    paddingTop: theme.spacing.xxl,
                }}
            >
                <Text
                    style={{
                        fontSize: theme.fontSizes.large,
                        fontWeight: theme.fontWeights.bold,
                        color: theme.colors.white,
                        marginBottom: theme.spacing.sm,
                    }}
                >
                    Repositorios
                </Text>
                <Text
                    style={{
                        fontSize: theme.fontSizes.body,
                        color: 'rgba(255,255,255,0.9)',
                    }}
                >
                    Descubre los mejores repositorios
                </Text>
            </View>

            <RepositoryFilter
                selectedLanguage={selectedLanguage}
                selectedSort={selectedSort}
                onLanguageChange={setSelectedLanguage}
                onSortChange={setSelectedSort}
            />

            <RepositoryList
                language={selectedLanguage}
                sortBy={selectedSort}
            />
        </View>
    )
}

export default Main