const express = require('express');
const router = express.Router();
const MeetingsController = require('../controllers/meetingsController');

router.post('/createMeeting', MeetingsController.createMeeting);
router.get('/getAllMeetings', MeetingsController.getAllMeetings);
router.put('/updateMeeting/:id', MeetingsController.updateMeeting);
router.delete('/deleteMeeting/:id', MeetingsController.deleteMeeting);

module.exports = router;
