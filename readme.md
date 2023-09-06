# ANTE_CLI

This project was created in react-ink.

It simulates a simple CLI-based application that does a few things.

## To install

```bash
$ npm install --global ante-cli
```

## To Run

First open the terminal and run

```bash
$ npm run build
```

After the build completes, the executable file will be created in the same directory.
You can now simply run the following

```bash
$ ante-cli --name=Jane
```

***For WINDOWS Users: You need to run the above commands as administrator. In a non-administrator terminal, running scripts is forbidden.***

The available commands are given below

### Commands
  --name:          Your name\
  --help:          Displays the available commands.\
  --about:         Displays information about the CLI.
  --fetch-price:   Provide a binance stock pair to obtain it's current valuation.\
  --upload:        Opens the file explorer to allow uploading csv files only.\
  --draw:          Draws the chart of the specified columns of the file present in the draw-chart directory\

***Note: Only the first 3 commands have been implemented in this project. The 'upload' and 'draw' commands are not available in this version.***

## CLI

```
$ ante-cli --help

  Usage
    $ ante-cli

  Options
    --name          Your name
    --help          Displays the available commands
    --about         Displays information about the CLI
    --fetch-price   Provide a binance stock pair to obtain it's current valuation

  Examples
    $ ante-cli --name=Jane
    Hello, Jane

    $ ante-cli --fetch-price=ETHUSDT
    The current price of ETHUSDT is 1629.84237129
```
