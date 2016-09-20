/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       Engine = require('../model/Engine');

  /**
   * Engines service.
   * @module api/EnginesApi
   * @version 0.1.6
   */

  /**
   * Constructs a new EnginesApi. 
   * @alias module:api/EnginesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns the details of all available AutoCAD core engines.
     * data is of type: {Array.<module:model/Engine>}
     * @param {Object} credentials Credentials for the call
     */
    this.getAllEngines = function(credentials) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = [Engine];

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/Engines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the details of a specific AutoCAD core engine.
     * @param {String} id 
     * data is of type: {module:model/Engine}
     * @param {Object} credentials Credentials for the call
     */
    this.getEngine = function(id, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getEngine";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Engine;

      return this.apiClient.callApi(
        '/autocad.io/us-east/v2/Engines(%27{id}%27)', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };
  };

  return exports;
}());
