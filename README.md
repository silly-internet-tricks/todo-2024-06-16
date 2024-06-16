# My Basic To Do App!

## Entities
* User
* Group
* Task
* List
* Comment

## Out of Scope (for today --- maybe we can add these another time, but we're going *BASIC*)
* Image/Media Uploads
* Use of Cloud Services (e.g. S3, Cognito)
* SSO/OAuth (basic login only)
* Email/SMS/Notifications
* Styling
* Address Bar Navigation (just an SPA for today)
* Swagger / API Documentation
* Real Time Updating/WebSockets
* Cypress/TDD/Testing in General
* Emoji Reactions

## Fields
* User:
  * id
  * unique name
  * readable name
  * description
  * hashed password
  * join date/creation date
* Task:
  * id
  * readable name
  * description
  * created_date
  * last_modified_date
  * due_date
  * completion_date (Note: is complete status is determined by completion_date being not null)
  * assignee_id (user)
  * owner_id (group or user)
  * is_archived

## Join Tables
* User --- Group (member)
* User --- Group (admin)
* Group --- Group
* Task --- List
* List --- List

## Permissions

If you are a user, you may:
  * update your own password
  * update your own unique username
  * update your own readable username
  * update your own description
  * search for users
  * view other user profiles
  * create a group (you will be an admin)
  * create a task (will be owned by you and assigned to you)
  * edit a task (which you own)
  * mark a task complete (which you own)
  * delete a task (which you own) (permanently)
  * archive and hide a task (which you own)
  * accept cookies

If you are an unauthenticated guest, you may:
  * create a new user
  * login as an existing user (including guest)

If you are guest, you may do everything users do, except:
  * you may not update the guest password
  * you may not update the guest unique username

If you are a task owner (this includes members of a group which owns a task), you may:
  * edit the task
  * mark the task complete
  * delete the task permanently
  * archive and hide the task

## Tech Stack
 * MySQL for database which will include most business logic
 * Vanilla Node (TypeScript) web server
   * Just two layers:
     1. expose REST API
     2. call MySQL stored procedures
 * TypeScript SPA client
     * minimal HTML/CSS
     * Use standard browser APIs
 * EC2 free tier hosting in fresh AWS account

## Next Steps
 1. define the rest api endpoints
 

## Additional Notes (for future reference)
 *  use like xampp or wamp for manage maria db and phpmyadmin or any other client (for some future project)
 * what is inner join? what is outer join?
   * in inner join rows are simply omitted from the result when there is no matching id
   * in outer join rows are included in the result even if there is no matching id
 * Find a place to use a "boolean array" in the project
