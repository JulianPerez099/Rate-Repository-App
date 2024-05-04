import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats';
import RepositoryItemHeader from './RepositoryItemHeader';

const RepositoryItem = (props) => {
    return (
        <View
            key={props.id}
            style={styles.container}
        >
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        padding: 20,
    },
});

export default RepositoryItem