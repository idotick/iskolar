
import { useEffect, useState } from "react";

import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { SubjectData } from "@/handlers/Subjects";

import { useTheme } from "@/constants/Theme";

type CumulativeViewProps = {
    subjects: SubjectData[]
    style?: ViewStyle
};

export default function CumulativeView( { subjects, style }: CumulativeViewProps ){
    const theme = useTheme();

    const themeStyle = {
        backgroundColor: theme.colors.secondary,
    };

    const [grade, setGrade] = useState<number>(1);

    useEffect(() => {
        const totalGrade = subjects.reduce((accumulator, subject) => accumulator + subject.grade, 0);
        const totalWeight = subjects.reduce((accumulator, subject) => accumulator + subject.weight, 0);

        setGrade(totalGrade / totalWeight);

    }, [subjects]);

    return (<View style={[styles.container, style, themeStyle]}>
        <Text style={styles.grade}> {grade.toFixed(2)} </Text>  
       
    </View>);
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

        width: "90%",
        height: 108,

        marginBottom: 24,

        paddingVertical: 8,
        paddingHorizontal: 16,

        borderRadius: 18,
    },

    grade: {
        textAlign: "center",
        textAlignVertical: "center",

        fontWeight: "bold",

        fontSize: 48,
    },

    row: {
        flexDirection: "row"
    }
});