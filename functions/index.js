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

process.env.DEBUG = 'actions-on-google:*';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const strings = require('./strings');

process.env.DEBUG = 'actions-on-google:*';




const Actions =  {
  UNRECOGNIZED_DEEP_LINK: 'deeplink.unknown',
  PRODUCT_SEARCH:'product.search',
  SPECIAL_OFFERS: 'special.offers',
  WELCOME:'welcome.input'
	
}

/** Dialogflow Parameters {@link https://dialogflow.com/docs/actions-and-parameters#parameters} */
const Parameters = {
  ITEM: 'item',
  CONTACT:'contact',
  PRICE_MIN: 'price_min',
  PRICE_MAX: 'price_max',
  DISCOUNT: 'discount'
};
/** Dialogflow Contexts {@link https://dialogflow.com/docs/contexts} */
const Contexts = {
  PRODUCT_SEARCH: 'productsearch-followup',
};
/** Dialogflow Context Lifespans {@link https://dialogflow.com/docs/contexts#lifespan} */
const Lifespans = {
  DEFAULT: 5,
  END: 0
};



var options = {
       uri: 'https://search-eci.herokuapp.com/searcheci',
       method: 'POST',
       json: {
         "result": {
	         "parameters": Parameters
	      }
    }
}





const callback = data=> {
    console.log(data);
}



const getJson = parameters => {
	var options = {
		   uri: 'https://search-eci.herokuapp.com/searcheci',
		   method: 'POST',
		   json: {
			 "result": {
				 "parameters": Parameters
			  }
		}
	}
	
   	request(options, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		   callback(body);
	   }
	else
		console.log(error);
	})  
	
}


//getJson(Parameters)

const welcome = app => app.tell('Hello, World!');






/** @type {Map<string, function(DialogflowApp): void>} */
const actionMap = new Map();
actionMap.set(Actions.WELCOME, welcome);
/*actionMap.set(Actions.UNRECOGNIZED_DEEP_LINK, unhandledDeepLinks);
actionMap.set(Actions.TELL_FACT, tellFact);
actionMap.set(Actions.TELL_CAT_FACT, tellCatFact);
*/

/**
 * The entry point to handle a http request
 * @param {Request} request An Express like Request object of the HTTP request
 * @param {Response} response An Express like Response object to send back data
 */
const shopping = functions.https.onRequest((request, response) => {
  const app = new DialogflowApp({ request, response });
  console.log(`Request headers: ${JSON.stringify(request.headers)}`);
  console.log(`Request body: ${JSON.stringify(request.body)}`);
  // Fulfill action business logic
  app.handleRequest(actionMap);
});

module.exports = {
  shopping
};

