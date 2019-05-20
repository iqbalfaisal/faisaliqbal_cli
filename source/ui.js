'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');


const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}
	if (item.action) {
		item.action();
	}
	if(item.skypeAction){
		console.log(item.skypeAction())
	}
};

const items = [

	{
		label: 'Github',
		url: 'https://github.com/faisalrajput'
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/faisal-iqbal-540a52112/'
	},
	// {
	// 	label: 'facebook',
	// 	url: 'https://www.facebook.com/usama.ali.0303506'
	// },
	{
		label: 'Private Email',
		url: 'mailto:bsc.f14.37@gmail.com'
	},
	{
		label: 'Skype',
		skypeAction(){
			return 'My skype Id is  ==> live:bsc.f14.37'
		}
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hello, I'm Faisal Iqbal</Text>
		</div>
		<br/>
		<div>
			<Text>I'm full stack javaScript developer.</Text>
		</div>
		<br/>
		<div>
			<Text>wanna to learn more about me </Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
