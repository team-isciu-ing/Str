'use strict';

/**
 * pbd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pbd.pbd');
