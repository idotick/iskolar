import { useState } from 'react';

import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

import { Page } from '@/components/pages/Page';
import PageContainer from '@/components/containers/PageContainer';
import TagScanner from '@/components/scanners/TagScanner';
import GradesView from '@/components/grades/GradesView';
import { SubjectData } from '@/handlers/Subjects';
import { clamp } from '@/util/Helpers';


export default function CalculatorScreen() {
    const [ subjects, setSubjects ] = useState<SubjectData[]>([
        {
            name: "Mathematics",
            grade: 1,
            weight: 1
        },

        {
            name: "Integrated Science",
            grade: 1,
            weight: 1
        }
    ]);

    function onChange(name: string, change: number) {
        setSubjects(prev => prev.map(subject => (subject.name == name) ? { ...subject, grade: clamp(subject.grade + change, 1, 5)} : subject));
    };

    return (
        <PageContainer>
            <Page title={"GWA Calculator"} style={styles.page}>

                <GradesView subjects={subjects} onChange={onChange}/>

            </Page>
        </PageContainer>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,

        width: "100%",
        height: "100%",
    },

    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: "100%",
    },

    background: {
        position: "absolute",

        width: '100%',
        height: '100%',
    },

    message: {       
        fontSize: 16,

        fontWeight: "bold",

        color: "#ffffff"
    },

    button: {
        alignItems: "center",
        
        width: 128,

        marginTop: 24,

        padding: 8,

        borderRadius: 24,

        backgroundColor: "lightblue"
    },

    buttonLabel: {
        fontSize: 20,
        fontWeight: "bold"
    }

});
