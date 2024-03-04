# Planify

## Description

Planify is a web application, developed with React, that helps you organise your day to day tasks.
It lets you create new tasks and check each out as you complete it.
To start your day the right way, use Planify!
For a live demo, follow this link: [Planify: The demo](https://ritandu.github.io/taskmanager-assignment2-ritamerhej/)

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/taskmanager-assignment2-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn dev` or `npm run dev`

## How I got Organised

I first read the requirements and understood them well.
Then I planned and implemented the logic in increments, and tested each feature manually after each increment.
Finally I added the styles.

## Challenges Faced

1. **State Management**:
   State management was hell. I had 2 pieces of state that had to be changed throughout the components, but they were managed by the top component. So I found myself passing state and all the handlers I had to deeply nested components.
   Therefore, I decided to re-write the logic using useReducer. It solved my problem as I just had to pass the state and the dispatch function wherever needed only.

2. **Coming up with the design**:
   I'm not a designer, so I found this really hard.
   I googled some things up and tried to find designs I liked to get inspiration.
   At the end, I came up with the current design. I received good feedback about it, but I still don't think I got it right.

## Folder Structure

The code is all located in the src/ folder.
###The src/ folder:
It is divided into the components/ folder, the features/ folder and the data/ folder.

### The components/ folder:

It is divided into:

1. atoms/ which is where the smallest pieces of components like buttons and inputs are implemented.
2. molecules/ which is where the atoms are used to create the structures that need to be used in the interface, like the Task component for example that specifies how a single task should be rendered.
3. organisms/ is where molecules are used to create features for the app. For example, there's the logic to handle tasks.
4. templates/ this is where organisms are grouped to create the different views in the app.

### The features/ folder

This is where the pages of the application are implemented. There's only one page in planify. It implements the navbar at the top of the page and renders the home page.

### The data/ folder:

It contains data, and interfaces to structure data objects.
