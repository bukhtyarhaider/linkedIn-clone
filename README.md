# LinkedIn Clone [![React App](https://img.shields.io/badge/demo-00C853?logo=react&logoColor=ffffff)](https://linkedin-clone-705b2.web.app)

![Linkedin](https://i.stack.imgur.com/gVE0j.png) **LinkedIn**




its a one day challenge to create a linkedIn clone with basic features - **Built using React JS, Redux & Firebase ** .

- Login functionality
- Sign up functionality
- Post functionality ( Text, Image Url )

## Features and Fuctionality

- Login using Google (Firebase Authentication)
- Create a new post
- Share photos and Text ( URL for photos )
- Realtime update posts
- Auto authenticate user on refresh
- Sign out

## How to build your own..?

1. Clone this repo
1. Install all the dependencies
   ```bash
   npm install
   ```
1. Setup Firebase

   - Create Firebase account
   - Create a new project
   - Create a web app for that
   - Copy your config from there

     - Select config option
     - Paste those config inside firebase/config.js file

   - Setup authentication using Google

1. Edit code as you like
1. Let's build the optimized version

   ```bash
   npm run build
   ```

1. **Now for hosting on Firebase lets config Firebase locally**

   - Install Firebase CLI
   - Login to Firebase

     ```bash
     firebase login
     ```

   - Initialize Firebase

     ```bash
     firebase init
     ```

   - Select hosting in the menu
   - Select your respective project from the list
   - Select 'build' as your hosting directory and other options as you want
   - Let's deploy our clone and make it live

     ```bash
     firebase deploy
     ```

**Thats how you can deloy and run your project**
