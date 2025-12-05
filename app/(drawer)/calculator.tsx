import { useState } from 'react';

import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

import { Dropdown } from 'react-native-paper-dropdown';

import { SubjectData } from '@/handlers/Subjects';

import Page from '@/components/pages/Page';
import PageContainer from '@/components/containers/PageContainer';
import TagScanner from '@/components/scanners/TagScanner';
import GradesView from '@/components/grades/GradesView';

import { clamp } from '@/util/Helpers';

const OPTIONS = [
    { label: "Grade 7", value: "7" },
    { label: "Grade 8", value: "8" },
    { label: "Grade 9", value: "9" },
    { label: "Grade 10", value: "10" },
    { label: "Grade 11", value: "11" },
    { label: "Grade 12", value: "12" }
];

export default function CalculatorScreen() {
    const [ subjects, setSubjects ] = useState<SubjectData[]>([
        {
            name: "Math 5",
            grade: 1,
            weight: 1
        },

        {
            name: "English 5",
            grade: 1,
            weight: 1
        },

        {
            name: "Filipino 5",
            grade: 1,
            weight: 1
        },

        {
            name: "Social Science 5",
            grade: 1,
            weight: 1
        },

        {
            name: "Research 5",
            grade: 1,
            weight: 1
        },

        {
            name: "Core",
            grade: 1,
            weight: 1
        },

        {
            name: "Elective",
            grade: 1,
            weight: 1
        }
    ]);
    
    const [ configuration, setConfiguration ] = useState<string>();

    function onChange(name: string, change: number) {
        setSubjects(prev => prev.map(subject => (subject.name == name) ? { ...subject, grade: clamp(subject.grade + change, 1, 5)} : subject));
    };

    return (
        <PageContainer>
            <Page title={"GWA Calculator"} style={styles.page} scrollable>
                <View style={styles.dropdown}>
                    <Dropdown label="Grade Level" placeholder="Select Grade Level" options={OPTIONS} value={configuration} hideMenuHeader={true} onSelect={setConfiguration}/>
                </View>
                    
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
    },

    dropdown: {
        alignSelf: "center",

        width: "90%"
    }

});
