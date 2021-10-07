//import 

const yargs= require('yargs');
const chalk = require("chalk");
const getNote = require("./notes.js");

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

	handler: function(argv){
		console.log('Title: ' + argv.title );
		console.log('Body: ' + argv.body );

	}
})
//create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function(){
		console.log("removing the note")
	}
})
//create a list command
yargs.command({
	command: 'list',
	describe: 'lists notes',
	handler: function(){
		console.log("displaying note list")
	}
})
//create a read command
yargs.command({
	command: 'read',
	describe: 'Read notes',
	handler: function(){
		console.log("read a note");
	}
})

yargs.parse(); //parsing the arguments

