# 8an3/bane - Monorepo


```sh
git clone https://github.com/8an3/bane-stack-monorepo.git
```
```sh
cd bane-stack-monorepo
```
```sh
str i:all
```
>If you dont already have str globally and you are not interested in it

```sh
pnpm i
```
>If you interested in installing str globally
```sh
npm -g install superuser-task-runner
```
>Or just in the workspace
```sh
pnpm install superuser-task-runner
```
>If this is your [first time running str](#first-time-running-str) 
```sh
str init
```
>Once str is installed 
```sh
str i:all
```

- Apps
  - [8an3/bane](https://github.com/8an3/bane-stack-monorepo/blob/master/apps/app/README.md) Remix-Run 
  - [web](https://github.com/8an3/bane-stack-monorepo/blob/master/apps/web/README.md) Next.js

- Packages
  - [eslint-config](https://github.com/8an3/bane-stack-monorepo/blob/master/packages/eslint-config/README.md)
  - [typescript-config](https://github.com/8an3/bane-stack-monorepo/blob/master/packages/typescript-config/README.md)
  - [ui](https://github.com/8an3/bane-stack-monorepo/blob/master/packages/ui/README.md) shadCN 

- Notes
  
>Currently the root project is running next. I haven't used react-router as the primary so I have no idea how it runs because I personally haven't seen anyone do that. I'll get around to trying that, if it works I'll switch it over. I didn't use remix run in the root, because I know I will be swapping over eventually due to them closing shop and its just one less thing for me to down the road. Whatever updates bane gets, will be carried over to this project.
  
>Personally, when installing libraries in the apps/packges I opt for:

```sh
pnpm i --filter app  --prefer-offline --no-cache
```

>As it writes a lock file individually for each app/package, which means you will have a lot easier of a time when deploying. maybe your using a monorepo as a catch all for all personal projects or would like to, so you would need a lockfile for each project as you will not be deploying the entire monorepo all at once. Mainly though, it does save you from little hiccups here and there when you don't do it. STR is already configured with these flags so running str i:app or i:all will do this for you 

- to do list
- [ ] re-test everything
- [ ] convert components into a package to be reusable over multiple apps
- [ ] test react-router in the root project

## First Time Running Str

If this is your first time using str, feel free to check out DevStack on vscode marketplace as it was merged with that extension and hosts a nice ui for str, unless you enjoy the cli more then dont worry about it
