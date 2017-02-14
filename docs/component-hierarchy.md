## Component Hierarchy

### App
 - Nav
 - {children}
 
### AuthFormContainer

 - AuthForm
    
### MatchesContainer

 - Matches
    - FilterMatches
    - MatchList
      - MatchListItem
      
### ProfileContainer

 - Profile
    - ProfileHeader
    - ProfileQuestions
    - UserInfo
    
### MessagesContainer

 - Messages
    - MessageList
      - MessageListItem
      
### ThreadContainer

 - Thread
    - Message
      - MessageHeader
      - Conversation
        - SingleMessage
      - NewMessage
      
### QuestionsContainer

 - Questions
    - QuestionList
      - QuestionListItem
    - NextPage

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | {AuthFormContainer} |
| "/sign-in" | {AuthFormContainer} |
| "/" | {MatchesContainer} |
| "/user/:userId" | {ProfileContainer} |
| "/user/:userId/messages | {MessagesContainer} |
| "/user/:userId/messages/:threadId | {ThreadContainer} |
| "/user/:userId/questions | {QuestionsContainer} |
