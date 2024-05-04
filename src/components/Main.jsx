import React from "react"
import Constants from "expo-constants"
import { Text, View } from "react-native"
import RepositoryList from "./RepositoryList"

const Main = () => {
    return (
        <View
            style={{
                flexGrow: 1,
                marginTop: Constants.statusBarHeight,
            }}
        >
            <RepositoryList />
        </View>
    )
}

export default Main