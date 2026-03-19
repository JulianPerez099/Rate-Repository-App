import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats';
import RepositoryItemHeader from './RepositoryItemHeader';
import theme from '../theme';

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
        paddingVertical: theme.spacing.lg,
        paddingHorizontal: theme.spacing.lg,
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.borderRadius.lg,
        marginVertical: theme.spacing.xs,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
});

export default RepositoryItem