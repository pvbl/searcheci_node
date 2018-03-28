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
//process.env.DEBUG = 'actions-on-google:*';
//const { DialogflowApp } = require('actions-on-google');

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());






//const callback = data => {  console.log(data);};



server.post('/searcheci', function (req, res) {

    //let movieToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.movie : 'The Godfather';
    
      var options = {
        uri: 'https://search-eci.herokuapp.com/searcheci',
        method: 'POST',
        json: {
          'result': {
            'parameters': {
              'item': 'samsung',
              'limit':2
            }
            
          }
        }
      };

      request(options, function (errorAPI, responseAPI, bodyAPI) {
        if (!errorAPI && responseAPI.statusCode == 200) {
            res.json(bodyAPI)
          //callback(JSON.stringify(body));
        } else { console.log(errorAPI); }
      });
    

});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...");
});

