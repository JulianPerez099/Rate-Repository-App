import { View, Image, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: theme.spacing.lg, alignItems: 'flex-start' }}>
            <View style={{ paddingRight: theme.spacing.lg }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>

            <View style={{ flex: 1 }} >
                <StyledText
                    fontWeight='bold'
                    style={{ fontSize: theme.fontSizes.title, marginBottom: theme.spacing.xs }}
                >
                    {fullName}
                </StyledText>
                <StyledText
                    color='secondary'
                    style={{ marginBottom: theme.spacing.md, lineHeight: 20 }}
                >
                    {description}
                </StyledText>
                {language && <View style={styles.languageTag}>
                    <StyledText style={styles.languageText}>{language}</StyledText>
                </View>}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    languageTag: {
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.md,
        alignSelf: 'flex-start',
        marginTop: theme.spacing.sm,
    },
    languageText: {
        color: theme.colors.white,
        fontSize: theme.fontSizes.body - 2,
        fontWeight: theme.fontWeights.bold,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: theme.colors.border,
    }
});

export default RepositoryItemHeader;