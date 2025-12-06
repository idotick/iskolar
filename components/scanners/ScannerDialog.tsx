import { Text, ViewProps, Image } from "react-native";

import { Button, Dialog, Portal } from "react-native-paper";

import { extractItemData, validateItemID } from "@/util/Helpers";

import { Bold, LineBreak } from "@/components/utility/Text";

type ScannerDialogProps = {
    data: string,
    active: boolean,
    onDismiss: () => void
} & ViewProps;

export default function ScannerDialog( { data, active, onDismiss }: ScannerDialogProps ){
    if (!validateItemID(data)){
        return (<Portal>
            <Dialog visible={active} onDismiss={onDismiss}>
                <Dialog.Title style={{fontWeight: "bold"}}> Scanning Error </Dialog.Title>
                <Dialog.Content>
                <Text>The code you scanned is invalid.</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>);
    }

    const { itemID, studentID, batch, studentNumber } = extractItemData(data);

    return (<Portal>
        <Dialog visible={active} onDismiss={onDismiss} style={{borderRadius: 12}}>
            <Dialog.Title style={{fontWeight: "bold", marginLeft: 16}}> Item Scanned! </Dialog.Title>
            <Dialog.Content>
            <Text>Belongs to <Bold>Student No. {studentNumber}</Bold>, <Bold>Batch {batch}</Bold>.</Text>
            <LineBreak/>
            <Text>Proceed to use <Bold>Discipline Office</Bold> to facilitate proper returning to the owner. </Text>
            <LineBreak/>
            <Text> Thank you for your cooperation! </Text>
            </Dialog.Content>
        </Dialog>
    </Portal>);
}