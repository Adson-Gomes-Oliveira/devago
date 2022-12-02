import express from 'express';
import ProjectController from '../controllers/projects.controller';
import ProjectService from '../services/projects.service';

const router = express.Router();
const service = new ProjectService();
const controller = new ProjectController(service); 

router.get('/categories', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', controller.create);
router.put('/:id', controller.edit);
router.delete('/:id', controller.exclude);

export default router;

/**
 * @swagger
 * components:
 *  schemas:
 *    ProjectsGet:
 *      type: object
 *      required:
 *        - title
 *        - linkToRepo
 *        - linkToProd
 *        - thumbnail
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated of the book
 *        title:
 *          type: string
 *          description: The project title
 *        description:
 *          type: string
 *          description: The project description
 *        linkToRepo:
 *          type: string
 *          description: Link for github repository
 *        linkToProd:
 *          type: string
 *          description: Link for application in production
 *        thumbnail:
 *          type: string
 *          description: Link for thumbnail image
 *        status:
 *          type: boolean
 *          description: Project status
 *        categories:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *              name:
 *                type: string
 *    ProjectsPost:
 *      type: object
 *      required:
 *        - title
 *        - linkToRepo
 *        - linkToProd
 *        - thumbnail
 *      properties:
 *        title:
 *          type: string
 *          description: The project title
 *        description:
 *          type: string
 *          description: The project description
 *        linkToRepo:
 *          type: string
 *          description: Link for github repository
 *        linkToProd:
 *          type: string
 *          description: Link for application in production
 *        thumbnail:
 *          type: string
 *          description: Link for thumbnail image
 *        status:
 *          type: boolean
 *          description: Project status
 *        categoryIds:
 *          type: array
 *          items:
 *            type: number
 *    ProjectsEdit:
 *      type: object
 *      required:
 *        - id
 *        - title
 *        - linkToRepo
 *        - linkToProd
 *        - thumbnail
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated of the project
 *        title:
 *          type: string
 *          description: The project title
 *        description:
 *          type: string
 *          description: The project description
 *        linkToRepo:
 *          type: string
 *          description: Link for github repository
 *        linkToProd:
 *          type: string
 *          description: Link for application in production
 *        thumbnail:
 *          type: string
 *          description: Link for thumbnail image
 *        status:
 *          type: boolean
 *          description: Project status
 *        categoryIds:
 *          type: array
 *          items:
 *            type: number
 */

/**
 * @swagger
 * tags:
 *  name: Projects
 *  descriptions: Projects manager API
 */

/**
 * @swagger
 * /projects/categories?includes=true:
 *    get:
 *      description: Get all the list of project with categories
 *      tags: [Projects]
 *      summary: Project request
 *      responses:
 *        200:
 *          description: Successfully Fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/ProjectsGet'
 * /projects/categories?includes=false:
 *    get:
 *      description: Get all the list of project without categories
 *      tags: [Projects]
 *      summary: Project request
 *      responses:
 *        200:
 *          description: Successfully Fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/ProjectsGet'
 * /projects/{id}:
 *    get:
 *      description: Get one project by id
 *      tags: [Projects]
 *      summary: Project request
 *      responses:
 *        200:
 *          description: Successfully Fetched
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/ProjectsGet'
 * /projects:
 *    post:
 *      description: Create a new project with categories
 *      tags: [Projects]
 *      summary: Project creation
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProjectsPost'
 *      responses:
 *        201:
 *          description: Successfully Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/ProjectsPost'
 *        404:
 *          description: Failure - Bad Request
 *        500:
 *          description: Failure - Internal Error
 *    put:
 *      description: Edit a project
 *      tags: [Projects]
 *      summary: Project edition
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProjectsEdit'
 *      responses:
 *        201:
 *          description: Successfully Edited
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/ProjectsEdit'
 *        404:
 *          description: Failure - Bad Request
 *        500:
 *          description: Failure - Internal Error
 *    delete:
 *      description: Delete a project
 *      tags: [Projects]
 *      summary: Project deletion
 *      responses:
 *        204:
 *          description: Successfully Deleted
 */
