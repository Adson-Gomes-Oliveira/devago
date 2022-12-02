import express from 'express';
import CategoryController from '../controllers/categories.controller';
import CategoryService from '../services/categories.service';

const router = express.Router();
const service = new CategoryService();
const controller = new CategoryController(service);

/**
 * @swagger
 * components:
 *  schemas:
 *    Categories:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated of the category
 *        name:
 *          type: string
 *          description: The category name
 */

/**
 * @swagger
 * tags:
 *  name: Categories
 *  descriptions: Categories manager API
 */

/**
 * @swagger
 * /categories:
 *    get:
 *      description: Get all the list of categories
 *      tags: [Categories]
 *      summary: Category request
 *      responses:
 *        200:
 *          description: Successfully Fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Categories'
 */

router.get('/', controller.getAll);

export default router;
