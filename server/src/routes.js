import { Router } from 'express';

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
import UserQuestionController from './app/controllers/UserQuestionController';
import TagQuestionController from './app/controllers/TagQuestionController';
import CourseQuestionController from './app/controllers/CourseQuestionController';
import SubjectQuestionController from './app/controllers/SubjectQuestionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/institutions', InstitutionController.index);

routes.get('/courses/:id', CourseController.show);
routes.get('/courses', CourseController.index);

routes.get('/tags', TagController.index);

routes.get('/subjects', SubjectController.index);
routes.post('/students', StudentController.store);

routes.get('/subjects/:id', SubjectController.show);

routes.get('/answers', AnswerController.index);
routes.get('/answers/:id', AnswerController.show);

routes.get('/questions', QuestionController.index);
routes.get('/questions/:id', QuestionController.show);

routes.get('/questions/tag/:tagName', TagQuestionController.index);
routes.get('/questions/course/:courseId', CourseQuestionController.index);
routes.get('/questions/subject/:subjectId', SubjectQuestionController.index);

routes.post('/institutions', InstitutionController.store);
routes.put('/institutions', InstitutionController.update);

routes.post('/courses', CourseController.store);
routes.post('/subjects', SubjectController.store);

routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.destroy);

routes.put('/subjects/:id', SubjectController.update);
routes.delete('/subjects/:id', SubjectController.destroy);

routes.post('/tags', TagController.store);

routes.use(authMiddleware);

routes.put('/students', StudentController.update);

routes.post('/questions', QuestionController.store);
routes.put('/questions/:id', QuestionController.update);
routes.delete('/questions/:id', QuestionController.destroy);

routes.get('/question-student', UserQuestionController.index);

routes.post('/answers', AnswerController.store);
routes.put('/answers/:id', AnswerController.update);
routes.delete('/answers/:id', AnswerController.destroy);

routes.post('/like-question/:id', LikeQuestionController.store);
routes.post('/dislike-question/:id', DislikeQuestionController.store);

export default routes;
