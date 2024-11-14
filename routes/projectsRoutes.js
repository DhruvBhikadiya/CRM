const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projectsController');

router.post('/createProject', ProjectsController.createProject);
router.get('/getAllProjects', ProjectsController.getAllProjects);
router.get('/getProjectsByClientId/:clientId', ProjectsController.getProjectsByClientId);
router.put('/updateProject/:id', ProjectsController.updateProject);
router.delete('/deleteProject/:id', ProjectsController.deleteProject);

module.exports = router;
