import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import InstitutionController from './app/controllers/InstitutionController';
import StudentController from './app/controllers/StudentController';
import CourseController from './app/controllers/CourseController';
import SubjectController from './app/controllers/SubjectController';
import QuestionController from './app/controllers/QuestionController';
import TagController from './app/controllers/TagController';
import AnswerController from './app/controllers/AnswerController';
import LikeQuestionController from './app/controllers/LikeQuestionController';
import DislikeQuestionController from './app/controllers/DislikeQuestionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/institutions', InstitutionController.store);
routes.get('/institutions', InstitutionController.index);
routes.post('/students', StudentController.store);
routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);
routes.get('/subjects', SubjectController.index);
routes.post('/subjects', SubjectController.store);
routes.get('/tags', TagController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.put('/institutions', InstitutionController.update);
routes.put('/students', StudentController.update);

routes.get('/courses/:id', CourseController.show);
routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.destroy);

routes.get('/subjects/:id', SubjectController.show);
routes.put('/subjects/:id', SubjectController.update);
routes.delete('/subjects/:id', SubjectController.destroy);

routes.get('/questions', QuestionController.index);
routes.get('/questions/:id', QuestionController.show);
routes.post('/questions', QuestionController.store);
routes.put('/questions/:id', QuestionController.update);
routes.delete('/questions/:id', QuestionController.destroy);

routes.get('/answers', AnswerController.index);
routes.get('/answers/:id', AnswerController.show);
routes.post('/answers', AnswerController.store);
routes.put('/answers/:id', AnswerController.update);
routes.delete('/answers/:id', AnswerController.destroy);

routes.post('/tags', TagController.store);

routes.post('/like-question/:id', LikeQuestionController.store);
routes.post('/dislike-question/:id', DislikeQuestionController.store);

export default routes;
