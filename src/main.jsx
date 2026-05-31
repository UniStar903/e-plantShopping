Task 6: Set up the global store
Navigate to the main.jsx file in the src folder.

The Provider component from the react-redux library is already imported. This component enables all components in the application to access the Redux store.

js

import { Provider } from 'react-redux';
The Redux store is imported from the store.js file. This store holds the application's state, using the reducer defined in the CartSlice.jsx file.
js

import store from './store.js';
The App component is wrapped with the Provider component, with the Redux store passed as a prop. This allows all components in the app to access and interact with the global state managed by Redux.
js

<Provider store={store}>
  <App />
</Provider>
Deploying Your Application with GitHub Pages
To deploy your react application in GitHub you need to install gh-pages. This allows you to use it as a tool for deploying your project to GitHub Pages. Perform given command in the terminal

javascript

npm install gh-pages --save-dev
Add given lines before "build": "vite build" in package.json file.

javascript

"predeploy": "npm run build",
"deploy": "gh-pages -d dist",


Then in the vite.config.js file add this line before plugins: [react()]

javascript

base: "/YOUR_REPOSITORY_NAME",


Note: Instead of write your own repository name such as assume if your github repository name is learning_react the it should look like base: "/learning_react"

Now perform deploy command in the terminal to executes the "deploy" script defined in the package.json file, deploying the project to GitHub Pages using the gh-pages tool.

javascript

npm run deploy


Note: Whenever you make any change to your code you need to save all your files and perform git commands for them.

Perform git add and git commit commands to update changes in your code. Then perform git push command to update your GitHub repository for proper code management.

Go to your GitHub repository. Then, navigate to your site's repository that you created.

Under your repository name, click Settings.



Navigate to the left hand side navigation bar. In the Code and Automation section of the sidebar, click Pages.

Settings tab with Pages circled

You will see the page shown below. Click the drop down menu where you see None, then click gh-pages, and then click the Save button.



Refresh your page again, and you will see the link, just as below. Instead of shoppingreact, you will see your github repository name.



Note: If you are not able to see the link, please wait for (1-2) minutes and refresh the page again.

Click above generated link to see your live website.

gh react.png

Note:

This code is pre-configured in the repository and ready for use.
Make sure that you save these changes by pushing your code to your GitHub repository
After deploying on GitHub Pages, it may take some time for all contents and images to appear properly. Please wait a few extra minutes for the application to load completely.