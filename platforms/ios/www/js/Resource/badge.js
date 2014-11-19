/*
    Copyright 2013-2014 appPlant UG

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

var Badge = function () {
    this._title = '%d new messages';
};

Badge.prototype = {
    /**
     * Entfernt den Badge vom App Icon.
     */
    clear: function () {
        cordova.exec(null, null, 'Badge', 'setBadge', [0, null]);
    },

    /**
     * Fügt dem App Icon einen Badge hinzu.
     *
     * @param {Number} badge
     */
    set: function (badge) {
        cordova.exec(null, null, 'Badge', 'setBadge', [parseInt(badge) || 0, this._title]);
    },

    /**
     * Setzt den Wert des Notification Titels (Android).
     *
     * @param {String} title
     */
    setTitle: function (title) {
        this._title = title;
    }
};

var plugin = new Badge();

module.exports = plugin;