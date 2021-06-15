"use strict";
const path = require("path");
const { h, Text } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");

const open = (url) => opn(url, { wait: false });

const handleSelect = (item) => {
	if (item.url) {
		open(item.url);
	}
	if (item.action) {
		item.action();
	}
	if (item.skypeAction) {
		console.log(item.skypeAction());
	}
};

const items = [
	{
		label: "Github",
		url: "https://github.com/iqbalfaisal",
	},
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/faisal-iqbal-540a52112/",
	},
	// {
	// 	label: 'facebook',
	// 	url: 'https://www.facebook.com/usama.ali.0303506'
	// },
	{
		label: "Private Email",
		url: "mailto:7faisaliqbal@gmail.com",
	},
	{
		label: "Skype",
		skypeAction() {
			return "My skype Id is  ==> live:.cid.39cf940c8ee4f366";
		},
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: "Quit",
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		},
	},
];

module.exports = () => (
	<div>
		<br />
		<div>
			<Text>Hello, I'm Faisal Iqbal</Text>
		</div>
		<br />
		<div>
			<Text>
				Worked as a Sr. Mobile App Developer for 3 years, having hands-on skills
				in React Native for building a mobile application from scratch to the
				presentation level, has the expertise in writing complex code &
				optimizing it. Start working as a full-stack developer by using Node JS
				as back-end & React JS as a front end. Seek to be very proficient in
				building web applications by using MERN.
			</Text>
		</div>
		<br />
		<div>
			<Text>wanna to learn more about me </Text>
		</div>
		<br />
		<SelectInput items={items} onSelect={handleSelect} />
	</div>
);
