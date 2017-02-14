# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create a new user 
- `PATCH /api/user/:id` - edit current user profile
- `GET /api/user/:id` - show a user's profile
- `GET /api/users` - index of all a user's matches

### Session

- `POST /api/session` - login user
- `DELETE /api/session` - logout user

### Questions

- `GET /api/questions` -index of all questions
- `GET /api/question/:id` -shows a single question

### Messages 

- `GET /api/threads` -index of all a user's conversations
- `GET /api/threads/:threadId` -shows a single conversation
