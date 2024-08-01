# Poor-notify

### Desc

An Express + TS REST API that serves notifications and subscriptions services for Poorthekid blog posts
****
How to use this template:

```sh
npx create-express-api --typescript --directory my-api-name
```

Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

- [typescript](https://www.npmjs.com/package/typescript)
  - TypeScript is a language for application-scale JavaScript.
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution and REPL for node.js, with source map and native ESM support.
- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [typescript-eslint](https://typescript-eslint.io/)
  - Tooling which enables ESLint to support TypeScript.
- [jest](https://www.npmjs.com/package/jest)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

## Notifications Project Structure

/src
│
├── /api
│ ├── emojis.ts // Existing file for handling emoji-related routes
│ ├── index.ts // API entry point, import your routes here
│ ├── notificationRoutes.ts // New route for handling notifications
│ └── subscriberRoutes.ts // New route for handling subscriptions
│
├── /interfaces
│ ├── ErrorResponse.ts // Existing interface for error responses
│ ├── MessageResponse.ts // Existing interface for message responses
│ ├── middlewares.ts // Existing file for middlewares
│ ├── Notification.ts // New interface for Notification data model
│ └── Subscriber.ts // New interface for Subscriber data model
│
├── /services // This folder should be created
│ ├── notificationService.ts // New service file for handling notification logic
│ ├── subscriberService.ts // New service file for handling subscriber logic
│ └── emailService.ts // New service file for handling email sending logic
│
├── /middlewares
│ ├── notFound.ts // Existing or new middleware for handling 404 errors
│ └── errorHandler.ts // Existing or new middleware for handling general errors
│
└── /test
├── api.test.ts // Existing test file for API
├── app.test.ts // Existing test file for the application
