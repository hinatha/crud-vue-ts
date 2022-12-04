# 1. Project overview

## (1)App Features

This app is able to use below function.

User story

- You can add todo.
- You can see todos.
- You can delete todo.
- You can edit todo.
- You can see the number of todos.

## (2)Project Structure

```bash
.
├── .editorconfig
├── .gitignore
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── clients
│   │   ├── RepositoryFactory.ts
│   │   └── TodoClient
│   │       ├── index.ts
│   │       ├── mock.ts
│   │       └── types.ts
│   ├── components
│   │   ├── AsyncTodos.vue
│   │   └── TodoItem.vue
│   ├── composables
│   │   └── use-formate-date.ts
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   └── todo
│   │       ├── index.ts
│   │       └── types.ts
│   └── views
│       ├── AddTodo.vue
│       ├── EditTodo.vue
│       └── todo.vue
├── tsconfig.json
└── vue.config.js

11 directories, 27 files
```

# 2. Usage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development by using localStorage
```
npm run serve
```

### Compiles and hot-reloads for development by using mock
```
npm run mock
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
