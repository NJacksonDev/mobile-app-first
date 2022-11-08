import React from "react";
import { Text, StyleSheet } from 'react-native'

export default function Welcome({ firstName }) {
    return (
        <Text style={styles.largeText}>
            Welcome {firstName}!</Text>
    )
}


const styles = StyleSheet.create({
    largeText: {
        fontSize: 36,
        fontWeight:'900',
        color: 'magenta'
    }
}
)