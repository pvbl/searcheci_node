// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const request = require('request');
// const strings = require('./strings');

const parameters = {
          'item': 'samsung',
          'limit':10
        }

const callback = data => {  console.log(data);};

function welcome(parameters,callback) {
  var options = {
    uri: 'http://35.204.234.28:5000/searcheci',
    method: 'POST',
    json: {
      'result': {
        'parameters': parameters
        
      }
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
		if(body[0]['name']){
      console.log(body[0]['name']);
    }
    else{
		console.log('paco');
	}
      //callback(JSON.stringify(body));
    } else { console.log(error); }
  });
};

welcome(parameters,callback)
// const welcome = app => app.tell('Hello, World!');
