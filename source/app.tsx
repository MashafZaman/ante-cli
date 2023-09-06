import React, { FC, useEffect } from "react";
import { Box, Text } from "ink";
import axios, { AxiosResponse } from "axios";
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

// type Props = {
// 	name: string | undefined;
// 	fetch_price: string | undefined;
//  about: string | undefined;
// };

interface Data {
	mins: number;
	price: string;
}

const App: FC<{ name?: string, fetch_price?: string, about?: string, upload?: string}> = ({ 
		name = "Stranger", 
		fetch_price = " ", 
		about = "-", 
	}) => {
	if (about === ""){
		return (
			<Text>
				<Text bold color="cyan">
					CLI Version 1.0
				</Text>
				{'\n'}
				<Text>
					This is a front-end CLI created as a part of the Full Stack Hiring test. It simulates various command-line functionalities.
				</Text>
			</Text>
		);
	}
	if (fetch_price !== " "){		
		if (fetch_price.length < 10 && fetch_price.length > 6){
			const [data, setData] = React.useState<Data | null>(null);

			// fetch TWAP data with its pair name using binance API
			const price_data = async (fetch_price: string): Promise<Data> => {
				const url = `https://api.binance.com/api/v3/avgPrice?symbol=${fetch_price}`;
	
				return axios.get<Data>(url).then((response: AxiosResponse<Data>) => {
					return response.data;
				});
			};
	
			// call useEffect and use store the binance data in state
			useEffect(() => {
				price_data(fetch_price).then((data: Data) => {
					setData(data);
				});
			}, [fetch_price]);
	
			return (
				(data && (
					<Box>
						<Text>
							The current price of {fetch_price} is <Text bold color="green">	{data!.price} </Text>
						</Text>
					</Box>
				)) || <Text color="green">Loading...</Text>
			);
		}
		else {
			return (
				<Text bold color="red">
					{fetch_price} is not a valid pair
				</Text>
			);
		}
	}
	else {
		return (
			<Gradient name="passion">
				<BigText 
					text="ANTE-CLI" 
					align='center' 
					font='simpleBlock'
				/>
				<Text>
					Hello, {name}
				</Text>
			</Gradient>
		);
	}
};


export default App;