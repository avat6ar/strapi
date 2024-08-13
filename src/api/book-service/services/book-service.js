'use strict';

/**
 * book-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-service.book-service');
