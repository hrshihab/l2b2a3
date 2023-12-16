import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidation } from './course.validation'
import { CourseControllers } from './course.controllers'

const router = express.Router()
router.post(
  '/course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
)

router.get('/courses', CourseControllers.getAllCourses)

export const CourseRoutes = router