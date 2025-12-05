import { StyleSheet, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import GradeView from './GradeView';
import { SubjectData } from "@/handlers/Subjects";
import { FlatList } from "react-native-gesture-handler";
import CumulativeView from "./CumulativeView";

type GradesViewProps = {
    subjects: SubjectData[]
    onChange: (name: string, change: number) => void
};

export default function GradesView( { subjects, onChange }: GradesViewProps ){
    return (<View style={styles.container}>
        <CumulativeView subjects={subjects} style={styles.cumulative}/>
        <FlatList style={styles.list} data={subjects} scrollEnabled={false} renderItem={({item}) => {
            return (<GradeView name={item.name} value={item.grade} onChange={onChange}/>)
        }}/>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    list: {
        alignSelf: "center",
        
        flex: 1,

        width: "100%",
        height: "100%",
    },

    cumulative: {
        marginTop: 24
    }
});