# Twilio Voice Client – Live Workshop

This repository is boilerplate code to go along with a live session on how to leverage Twilio's Voice Client. In the session we cover three parts: 
1. Basic Twilio Voice Client deployment
2. Uplevel: Adding features like mute/unmute
3. Bonus: Bridging in other platforms like phone calls

### Step 1: Create a Function service.

Navigate to https://www.twilio.com/console/functions and click `Create Service`. Name this anything you'd like.

### Step 2: Update your Function service's environment.

In the service, find `Environment Variables` in the bottom-left side and set the following values:

IMPORTANT: Uncheck `Add my Twilio Credentials (ACCOUNT_SID) and (AUTH_TOKEN) to ENV`

| Variable              | Description | Required |
| :-------------------- | :----------------------------------------------------- | :-- |
| `ACCOUNT_SID` | To be provided during the live session; the SID of a Twilio Account | Yes |
| `AUTH_TOKEN` | To be provided during the live session; the Auth Toen of a Twilio Account | Yes |
| `SHARED_ACCOUNT_KEY` | To be provided during the live session; the SID of a Twilio Key | Yes |
| `SHARED_ACCOUNT_SECRET` | To be provided during the live session; the Seret of a Twilio Key | Yes |
| `TWIML_APP_SID` | To be created during our live session | Yes |


### Step 3: Update your Function service's dependencies.

In the service, find `Dependencies` in the bottom-left side. Add the following dependency:

| Module              | Version |
| :-------------------- | :----------------------------------------------------- |
| `twilio` | * |

### Step 4: Upload all `/assets`

We need to upload our static files: the html, css, js, and json that powers this demo. 

1. Download this git repo.
2. In the service, click the blue `Add +` button, and then click `Upload File`.
3. Navigate to the `/assets` directory of this git repo and select all the files.
4. Set `index.html`, `style.css`, and `script.js` to `Public`. 
6. Click the blue `Deploy All` button in the bottom left corner.

### Step 5: Upload `token.js`

1. In the service, click the blue `Add +` button, and then click `Add Function`.
2. Set the function name here to `token.js`. 
3. Set the visibility by clicking beside the function name to `public`. 
4. Copy the contents from `functions/token.js` to this file.
5. Click the blue `Save` button, then click the blue `Deploy All` button in the bottom left corner.
6. Click on `Copy URL` near the bottom-right of the function editor.

### Step 6: Begin the Live Session

That's it! You are now ready to participate in this live Voice Client Session!