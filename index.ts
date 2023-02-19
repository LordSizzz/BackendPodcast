import { AddUser, Login } from './Controllers/UserController';
import { AddComment, GetAllComment, GetCommentById, GetCommentForPodcast, GetCommentForUser } from './Controllers/CommentController';
import { AddPodcast, GetAllPodcast, GetPodcastById, GetPodcastForUser } from './Controllers/PodcastController';

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 


app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.json());

app.listen(80, () => { 
    console.log('Server Started!') // Log when listen success
})

app.post('/SignUp', AddUser)
app.post('/Login', Login)

app.post('/AddComment', AddComment)
app.get('/GetAllComment', GetAllComment)
app.get('/GetCommentById/:id', GetCommentById)
app.get('/GetCommentForUser/:id', GetCommentForUser)
app.get('/GetCommentForPodcast/:id', GetCommentForPodcast)

app.post('AddPodcast', AddPodcast)
app.get('GetAllPodcast', GetAllPodcast)
app.get('GetPodcastById/:id', GetPodcastById)
app.get('GetPodcastForUser/:id', GetPodcastForUser)