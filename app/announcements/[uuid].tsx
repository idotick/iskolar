import { useEffect, useState } from "react";

import { Image, ScrollView, Text } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { ActivityIndicator } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import FitImage from 'react-native-fit-image';

import { AnnouncementData, requestAnnouncement, requestAnnouncementContent } from "@/handlers/Announcements";

import PageContainer from "@/components/containers/PageContainer";
import Page from "@/components/pages/Page";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";



export default function AnnouncementPage(){
    const { uuid } = useLocalSearchParams<{uuid: string}>();

    const [ content, setContent ] = useState<string | null>(null);
    const [ data, setData ] = useState<AnnouncementData | null>(null);
    
    async function setupContent(uuid: string){
        const requestedContent: string | null = await requestAnnouncementContent(uuid);
        const requestedData: AnnouncementData | null = await requestAnnouncement(uuid);

        setContent(requestedContent);
        setData(requestedData);
    }

    useEffect(() => {
        if (uuid){
            setupContent(uuid);
        }
        
    }, [uuid]);


    if (!data || !content){
        return (<PageContainer>
            <GestureHandlerRootView>
                <Page title={"Announcement"}  modal>
                    <ActivityIndicator size={"large"}/>
                </Page>
            </GestureHandlerRootView>
        </PageContainer>);
    }

    return (<PageContainer>
        <GestureHandlerRootView>
            <Page title={"Announcement"} modal>
                
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.subtitle}> Posted by {data.author} </Text>
                    <View style={styles.markdownContainer}>
                        <Markdown rules={{
                            image: (node) => {
                                const { key, ...props } = node.attributes;

                                const url: string | undefined = node.attributes.src;

                                try {
                                    return (<Image key={node.key} source={{uri: url}} width={200} height={200}  />)
                                }

                                catch (err) {
                                    console.error(err);
                                    return null;
                                }
                                
                            }
                        }}>
                            {content}
                        </Markdown>
                    </View>
                </ScrollView>
            </Page>
        </GestureHandlerRootView>
    </PageContainer>);
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,

        marginHorizontal: 16,
        marginTop: 16,

        paddingBottom: 24,
    },

    title: {
        width: "100%",

        fontSize: 24,
        letterSpacing: 1,
        fontWeight: "bold",

        marginBottom: 8,
        color: "black",
    },

    subtitle: {
        marginBottom: 8,

        fontStyle: "italic",

        color: "gray",
    },

    markdownContainer: {
        width: "100%",

        marginTop: 12,

        paddingLeft: 12,
        paddingRight: 8,
        paddingTop: 12,

        borderWidth: 1,
        borderColor: "#ffffff34",
        borderRadius: 4,

        backgroundColor: "white",

        elevation: 10,
    }
});