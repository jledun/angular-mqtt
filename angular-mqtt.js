/* Copyright (c) 2016 IO Systems

 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

( function() {
  "use strict";

  let default_config = {
    ip: "localhost",
    port: 1883,
    qos: 1,
    retain: true
  }

  angular.module('ngMqtt', []);

  angular.module('ngMqtt')
  .value('appName', 'ngMqtt')
  .value('default_config', default_config)
  .value('default_ip', 'localhost')
  .value('default_port', 1883)
  .value('default_qos', 1)
  .value('default_retain', true)
  .provider('mqtt', mqttProvider)
  .factory('mqttFactory', mqttFactory)
  .run( run );

  function mqttProvider() {
    let self = this;

    self.$get = ['', function() {}];
    self.test = function(msg) { console.log(msg); };

  };

  function mqttFactory($http, default_config) {

    let factory = {};
    factory.config = default_config;

    factory.test = () => {
      console.log(`default configuration : `);
      console.log(factory.config);
    }


    return factory;
  };

  function run() {
    console.log("je run de fou");
  };

} )();
