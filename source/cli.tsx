#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./app.js";

const cli = meow(
	`
	Available commands:
	- help: Show available commands
	- about: Display information about this CLI
	- fetch-price [coin]: Fetch the current price of a specified cryptocurrency
	- upload: Opens the file explorer to allow uploading csv files only.
	- draw [file] [columns]: Draws the chart of the specified columns of the file     present in the draw-chart directory.
	`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
			fetch_price: {
				type: 'string',
			},
			about: {
				type: 'string'
			},
			upload: {
				type: 'string'
			},
		},
	},
);


render(<App name={cli.flags.name} fetch_price={cli.flags.fetchPrice} about={cli.flags.about} upload={cli.flags.upload} />);
