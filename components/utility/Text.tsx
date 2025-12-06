import { Text, TextProps, ViewProps } from "react-native";

export function Bold( { style, children }: TextProps ){
    return (<Text style={[{fontWeight: "bold"}, style]}>
        { children }
    </Text>);
}

export function LineBreak( { style, children }: TextProps ){
    return (<Text style={[style]}>
        { children }
    </Text>);
}
