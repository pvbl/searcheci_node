// Copyright 2017, Google, Inc.
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

/**
 * This file contains the constant strings to be used in the code logic to allow for easy editing
 * Below are eslint comments to enforce JSON like syntax since strings are usually stored in JSON
 * They are written in JavaScript for easier organization of the data and in case functions are used
 */

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const deepFreeze = require('deep-freeze');



const general = {
  "heardItAll": "Te he enseñado todos los productos que me has pedido. ¿Quieres que sigamos viendo otros?",
  /** Used to give responses for no inputs */
  "noInputs": [
    "Lo siento, no he entendido.",
    "Hola, ¿sigues ahí? ¿Seguimos?",
    "Podemos terminarlo aquí. Hasta pronto."
  ],
  "suggestions": {
    /** Google Assistant will respond to more confirmation variants than just these suggestions */
    "confirmation": [
      "Claro!",
      "No Gracias!"
    ]
  },
  "nextFact": "Quieres ver el siguiente producto?",
  "linkOut": "Mas Info",
  "wantWhat": "So what would you like to hear about?",
  "unhandled": "Welcome to Facts about Google! I'd really rather not talk about %s. Wouldn't you rather talk about Google? I can tell you about Google's history or its headquarters. Which do you want to hear about?"
};

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  general
});
