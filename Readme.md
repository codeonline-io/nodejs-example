# NodeJS example for CodeOnline

This repository is a simple "Hello World" example to get started with the NodeJS Toolset in [CodeOnline](https://www.codeonline.io).

## Usage
Add the repository to the `workspace.yml` in your [CodeOnline Workspace](https://code.codeonline.io).
```yaml
repositories:
...
- name: nodejs-example
  git: https://github.com/codeonline-io/nodejs-example.git
  postInstall: npm install
```

## Run
The following steps explain how to run this example in your [CodeOnline Workspace](https://code.codeonline.io).
1. Open the 'Run' panel on the left-side of the screen.
2. Select "nodejs-example" run configuration
3. Hit the Run button, to start the application with a debugger attached.
4. Go to https://code.codeonline.io/proxy/3000 to see the example. 
