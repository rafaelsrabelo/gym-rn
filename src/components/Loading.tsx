import { Center, Spinner } from "@gluestack-ui/themed"

export function Loading () {
    return (
        <Center flex={1} bg='$backgroundLight900'>
            <Spinner color='$tertiary300' size={36} />
        </Center>
    )
}