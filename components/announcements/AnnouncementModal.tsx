import { AnnouncementData } from "@/util/Types";
import { StyleSheet, Text, ViewProps } from "react-native";
import { Card, Modal, Portal } from "react-native-paper";

type AnnouncementModalProps = {
    data: AnnouncementData | null,
    visible: boolean,
    onDismiss: () => void
} & ViewProps;

export default function AnnouncementModal( { data, visible, onDismiss }: AnnouncementModalProps ){
    function onDismissed(){
        onDismiss();
    }

    return (<Portal>
        <Modal style={styles.modal} contentContainerStyle={styles.container} visible={visible} onDismiss={onDismissed} >
            {
                (data) && (<>
                    <Card style={styles.card}>
                        <Card.Title titleStyle={styles.title} title={data.title}/>
                        <Card.Cover style={styles.cover} source={{ uri: 'https://hypixel.net/attachments/sweet-wonderland-png.3281057/' }} />
                        <Card.Content>
                            <Text style={styles.content}> {data.overview} </Text>
                        </Card.Content>
                    
                    </Card>
                </>)
            }   
        </Modal>
    </Portal>)
};

const styles = StyleSheet.create({
    portal: {
        
    },
    
    modal: {
        
    },

    container: {
        alignSelf: "center",

        width: "90%",
        height: "80%",

        borderRadius: 24,
    },

    cover: {
        alignSelf: "center",
        width: "90%",
    },

    card: {
        flex: 1,

        backgroundColor: "white",

        elevation: 0,
        shadowOpacity: 0
    },

    title: {
        marginTop: 16,

        fontWeight: "bold",
        fontSize: 20,
    },

    content: {
        marginTop: 12,
    }
});
