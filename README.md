Angular 2 - Conference Regsistration Application Demonstration

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/angular/quickstart  my-proj
cd my-proj
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```shell
rm -rf .git (if git already initialized)
git init
git add .
git commit -m "Initial commit"
```
Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```shell
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

## Problem Statement
Create a web page for online registration of the international seminar. The participants can be students, faculty members, professional. The registration fees should be accepted either in Rupees or Dollar or Euros. The participants should give choice for accommodation for provided hotels. Create the web page with required form elements and default values. The form should provide the controls for the information to accept above mentioned details as well as for personal and other relevant information. 

For the above problem statement the web pages are degned using Angular 2. For more details refer the guide.pdf file.
Follow the google link for demo video and guide pdf:
https://drive.google.com/open?id=1kClOpONKHnBufE3ecQ1Z-hvdjiH-e74o
