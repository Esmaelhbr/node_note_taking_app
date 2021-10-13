//import 

const yargs= require('yargs');
const chalk = require("chalk");
const notes = require("./notes.js");

//customized yargs version 
yargs.version('1.1.0')

//add, remove, read, list
//create add command
yargs.command({
	command : 'add',
	describe: 'Add a new note',
	builder:{
		title:{
			describe: 'Note title',
			demandOption: true ,   //user must provide a title as arg
			type:'string',

		},
		body:{
			describe: 'body',
			demandOption: true,
			type: 'string'
	}
		},

	handler(argv){
		notes.addNote(argv.title, argv.body);

	}
})



//create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder:{
		title:{
			describe:'note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		notes.removeNote(argv.title);
	}
})

//create a list command
yargs.command({
	command: 'list',
	describe: 'lists notes',
	handler(){
		notes.listNotes() ;
	}
})
//create a read command
yargs.command({
	command: 'read',
	describe: 'Read notes',
	handler(){
		console.log("read a note");
	}
})

yargs.parse(); //parsing the arguments