'use strict';

/**
 * book-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::book-service.book-service');
