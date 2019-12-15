Blockly.Blocks['motorKB_setup'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Setup board");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_reset'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Reset board");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("reset board");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_digital_read'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : digitalRead pin")
			.appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "ch");
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_digital_write'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : digitalWrite pin")
			.appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "ch");
		this.appendValueInput("value")
			.setCheck(["Number", "Boolean"])
			.appendField("to");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_analog_read'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : analogRead pin")
			.appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "ch");
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_motor'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png", 20, 20, "*"))
			.appendField("MotorKB : Set motor")
			.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "ch")
			.appendField("direction")
			.appendField(new Blockly.FieldDropdown([["Forward", "1"], ["Backward", "2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField("speed");
		this.appendDummyInput()
			.appendField("% (0-100)");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_servo'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Set servo motor")
			.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "ch");
		this.appendValueInput("angle")
			.setCheck("Number")
			.appendField("degree (0-180)")
		this.appendDummyInput()
			.appendField("degree (0-180)");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_servo2'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Set servo motor")
			.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "ch")
			.appendField("direction")
			.appendField(new Blockly.FieldDropdown([["Forward", "1"], ["Backward", "2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField("speed");
		this.appendDummyInput()
			.appendField("% (0-100)");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_config'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial baudrate")
			.appendField(new Blockly.FieldDropdown([["9600", "9600"], ["2400", "2400"], ["57600", "57600"], ["115200", "115200"]]), "baud");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_write'] = {
	init: function () {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField("MotorKB : Serial Write");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_write_line'] = {
	init: function () {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField("MotorKB : Serial Write new line");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_available'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial available");
		this.setInputsInline(true);
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_read_one_byte'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial read One byte");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

/*
Blockly.Blocks['motorKB_serial_read'] = {
	init: function() {
		this.appendValueInput("count")
			.setCheck("Number")
			.appendField("serial read");
		this.appendDummyInput()
			.appendField("characters");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};
*/

Blockly.Blocks['motorKB_serial_read_string'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial read String");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_read_line'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial read New line");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
};

Blockly.Blocks['motorKB_serial_read_until'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("MotorKB : Serial read Until")
			.appendField(new Blockly.FieldTextInput("$"), "until");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/");
	}
}

Blockly.Blocks['motorKB_motor_forward'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Move Forward at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_backward'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Move Backward at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 20,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_forward2'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : Move Forward (%2 speed %3 %%, %4 speed %5 % )",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motorleft",
				"options": [
					[
						"Motor 1",
						"1"
					],
					[
						"Motor 2",
						"2"
					],
					[
						"Motor 3",
						"3"
					],
					[
						"Motor 4",
						"4"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "field_dropdown",
				"name": "motorright",
				"options": [
					[
						"Motor 1",
						"1"
					],
					[
						"Motor 2",
						"2"
					],
					[
						"Motor 3",
						"3"
					],
					[
						"Motor 4",
						"4"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_backward2'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : Move Backward (%2 speed %3 %%, %4 speed %5 % )",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motorleft",
				"options": [
					[
						"Motor 1",
						"1"
					],
					[
						"Motor 2",
						"2"
					],
					[
						"Motor 3",
						"3"
					],
					[
						"Motor 4",
						"4"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "field_dropdown",
				"name": "motorright",
				"options": [
					[
						"Motor 1",
						"1"
					],
					[
						"Motor 2",
						"2"
					],
					[
						"Motor 3",
						"3"
					],
					[
						"Motor 4",
						"4"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_turn_left'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Turn Left at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_turn_right'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Turn Right at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_spin_left'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Spin Left at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_spin_right'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : %2 Spin Right at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "motor",
				"options": [
					[
						"Motor 1-2",
						"1"
					],
					[
						"Motor 3-4",
						"2"
					]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};

Blockly.Blocks['motorKB_motor_stop'] = {
	init: function () {
		this.jsonInit({
			"message0": "%1 MotorKB : Stop Moving",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/icons/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/"
		});
	}
};
