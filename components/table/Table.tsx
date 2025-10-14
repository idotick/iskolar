import { View, ViewProps, StyleSheet, Text, StyleProp, TextStyle } from "react-native";

import Container from "../containers/Container";
import { ClassData, TeacherData } from "./types";

type Data = ClassData | TeacherData;

type TableProps = {
	data: Array<Data>
	cellStyle?: StyleProp<TextStyle>
} & ViewProps


export function Table({ data, style, cellStyle } : TableProps) {
	return (
		<Container style={[styles.container, style]}>
			{
				data.map((cell, index) => {
					return (
						<View key={index} style={
							(data.length - 1) === index ? (
								styles.row
							) : styles.borderedRow
						}>
							{
								Object.values(cell).map((value, index) => {
									return (
										<Text style={[
											(Object.values(cell).length - 1 === index) ? (
												styles.tableCell
											) : styles.borderedCell,
											cellStyle
										]}
											key={index}
										>
											{value}
															
										</Text>	
									)
								})
							}
						</View>
					)
				})
			}
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flex: 1,
		flexDirection: 'row',

		borderColor: 'white',
	},
	borderedRow: {
		flex: 1,
		flexDirection: 'row',

		borderBottomWidth: 4,
		borderColor: 'white',
	},
	tableCell: {
		padding: 5,

		color: 'white',
	},
	borderedCell: {
		padding: 5,

		borderRightWidth: 4,
		borderColor: 'white',
		
		color: 'white',
	}
});