import { View, Image, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';



const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2, alignItems: 'center' }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>

            <View style={{ flex: 1 }} >
                <StyledText fontWeight='bold'>{fullName}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 5
    },
    image: {
        width: 65,
        height: 70,
        borderRadius: 5,
        margin: 'auto'
    }
});

export default RepositoryItemHeader;