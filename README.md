# Greedy Queue

![demo](https://res.cloudinary.com/djpm9j3j3/image/upload/v1722086301/Queue_urgrsa.png)

## 📝 Description

**Greedy Queue**, is a Q&A platform for developers and students. This platform functions as a dynamic hub where developers, regardless of their skill levels or expertise, converge to seek guidance, exchange insights, and foster a collaborative learning environment.

## 🌐 Live Demo

Explore the live demonstration of the project: [Greedy Queue Live](https://greedy-q.vercel.app/)

- **PowerPoint Presentation**: [Download the PPT](https://docs.google.com/presentation/d/1E5kpz0m9aSGNhQqBlAOKt7sgr9PiwPj3/edit?usp=sharing&ouid=101483937872788625785&rtpof=true&sd=true)
- **Technical Documentation**: [View Technical Documentation](https://drive.google.com/file/d/1ZkcQoMSfeSSk-r6HPUlAa5ZWz9oAvPFC/view?usp=sharing)
- **YouTube Demo**: [Watch the Demo Video](https://youtu.be/v1DRYq5VFeY)


## 📑Table of Contents

- [Greedy Queue](#greedy-queue)
  - [📝 Description](#-description)
  - [🌐 Live Demo](#-live-demo)
  - [📑Table of Contents](#table-of-contents)
  - [🧑‍💻Features:](#features)
    - [🌐 Cutting-edge Web Development:](#-cutting-edge-web-development)
    - [✨ Advanced Functionality:](#-advanced-functionality)
  - [⚙️ Technologies Used](#️-technologies-used)
  - [🧰 Get Started](#-get-started)
    - [📋 Prerequisites](#-prerequisites)
    - [⚙️ Installation and Run Locally](#️-installation-and-run-locally)
    - [📜 Scripts](#-scripts)
  - [🔒 Environment Variables](#-environment-variables)
  - [🚀 Deployment](#-deployment)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy on Vercel (recommended)](#deploy-on-vercel-recommended)
      - [Deploy on Netlify](#deploy-on-netlify)
  - [🔧 Contributing](#-contributing)
    - [📩 Bug / Feature Request](#-bug--feature-request)
  - [🛠️Acknowledgements](#️acknowledgements)
  - [📄 References](#-references)
  - [📩 Contact Us](#-contact-us)
  - [📑 License](#-license)

## 🧑‍💻Features:

### 🌐 Cutting-edge Web Development:

- **Next.js**: Used the Next.js framework, exploring routing, authentication, and real-time events.
- **UI/UX Optimization**: Extensive focus on user interface and user experience for seamless navigation.
- **Form Handling**: Efficient form handling using react-hook-form and zod for validation.
- **Open AI Integration**: Leveraged Open AI for generating automated answers.
- **SEO Optimization**: Implemented SEO best practices for better visibility.

### ✨ Advanced Functionality:

- **Recommendation System**: Unique system for recommending posts.
- **Global Database Data Fetching**: Effortlessly retrieve global database information.
- **AI-Generated Answers**: Innovative feature providing AI-generated answers to questions.
- **Badge & Reputation System**: Recognition system for user contributions.
- **Views and Voting Mechanism**: Engaging user interaction features.
- **Debounced Search**: Enhanced search capabilities for a seamless experience.

## ⚙️ Technologies Used

**GreedyQ** is built using the following technologies:

- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Clerk](https://clerk.dev/): Clerk is a developer-first authentication API that handles all the logic for user sign up, sign in, and more.
- [Shadcn-UI](https://ui.shadcn.com/): Shadcn UI is a React UI library that helps developers rapidly build modern web applications.
- [TinyMCE](https://www.tiny.cloud/): TinyMCE is the world's most popular JavaScript library for rich text editing.
- [MongoDB](https://www.mongodb.com/): MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [Mongoose](https://mongoosejs.com/): Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- [Prism.js](https://prismjs.com/): Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
- [Query String](https://www.npmjs.com/package/query-string): Parse and stringify URL query strings.
- [Svix](https://svix.com/): Svix is a webhook proxy that allows you to receive webhooks locally.
- [Zod](https://zod.dev/): Zod is a TypeScript-first schema declaration and validation library.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

[![Technologies Used](https://skillicons.dev/icons?i=nextjs,ts,tailwind,mongodb,vercel)](https://skillicons.dev)


## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

> [!IMPORTANT]
> - the application uses Clerk for Authentication and User Management, therefore, you need to create Clerk account [here](https://clerk.dev/) and sets the `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` environment variables in `.env` file. Also, the different URLs for the Clerk sign-in, sign-up, after sign-in and after sign-up pages.
> - the application uses a MongoDB database, therefore, you need to create a database and connect it to the application, for this, change the `MONGODB_URL` environment variable in `.env` file located in `server` folder.
> - the application uses TinyMCE, therefore, you need to create TinyMCE account [here](https://www.tiny.cloud/) and sets the `NEXT_PUBLIC_TINYMCE_API_KEY` environment variable in `.env` file.
> - the application uses OpenAI API, therefore, you need to create OpenAI account [here](https://openai.com/) and sets the `OPENAI_API_KEY` environment variable in `.env` file.
> - the application uses RapidAPI, therefore, you need to create RapidAPI account [here](https://rapidapi.com/), subscribe to the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/) and sets the `RAPIDAPI_API_KEY` environment variable in `.env` file.

After following all the instructions above, we'll want to create a new webhook on Clerk. To do this, go to the [Clerk Dashboard](https://dashboard.clerk.dev/), click on the "Webhooks" tab, and then click "Add Endpoint". For the Endpoint URL, enter `http://<PASTE-YOUR-LINK-HERE>/api/webhook/clerk`. For the events, select the "user". Then click "Create" to create the webhook. get the signing secret and set it as `CLERK_WEBHOOK_SECRET` environment variable in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/0xaira/GreedyQ
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script          | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
| `npm run start` | Start your production site locally          |
| `npm run lint`  | Run ESLint                                  |

## 🔒 Environment Variables

Environment variables[^12] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are set in the operating system or shell, typically used to configure programs.

**GreedyQ** uses [Clerk](https://clerk.com), [TinyMCE](https://uploadthing.com/), [RapidAPI](https://rapidapi.com), [OpenAI API](https://openai.com/blog/openai-api) and [MongoDB](https://mongodb.com) as external services. You need to create an account on each of these services and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>
NEXT_CLERK_WEBHOOK_SECRET=<CLERK_WEBHOOK_SECRET>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

NEXT_PUBLIC_TINY_MCE_API_KEY=<YOUR_TINY_MCE_API_KEY>

MONGODB_URL=<YOUR_MONGODB_URL>

NEXT_PUBLIC_SERVER_URL=<YOUR_SERVER_URL>

OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>

RAPID_API_KEY=<YOUR_RAPID_API_KEY>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Fnextjs14-devoverflow)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/nextjs14-devoverflow)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔧 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉

### 📩 Bug / Feature Request

If you find a bug (failure of a module to execute its intended function), kindly open an issue [here](https://github.com/0xaira/GreedyQ/issues/new) by including the issue with a title and clear description.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/0xaira/GreedyQ/issues/new). Please include sample queries and their corresponding results.

## 🛠️Acknowledgements

I would like to extend our heartfelt thanks to the following individuals and organizations for their invaluable support and contributions:

- [Clerk](https://clerk.dev/): For providing the authentication API that powers our user sign up and sign in features.
- [Shadcn UI](https://ui.shadcn.com/): For the React UI library that made our UI development a breeze.
- [TinyMCE](https://www.tiny.cloud/): For the rich text editor that enhances our question and answer formatting.
- [MongoDB](https://www.mongodb.com/): For the database solution that stores all our data.
- [OpenAI](https://www.openai.com/): For the AI that generates automated answers to questions.
- [Vercel](https://vercel.com/): For the cloud platform that hosts our application.

## 📄 References

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Clerk Documentation](https://clerk.dev/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [TinyMCE Documentation](https://www.tiny.cloud/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Prism.js Documentation](https://prismjs.com/docs/)
- [Query String Documentation](https://www.npmjs.com/package/query-string)
- [Svix Documentation](https://docs.svix.com/)
- [Zod Documentation](https://zod.dev/)
- [Vercel Documentation](https://vercel.com/docs)

## 📩 Contact Us

For any questions or inquiries, feel free to reach out to us at [contact.airajena@gmail.com](mailto:contact.airajena@gmail.com).


## 📑 License

This project is licensed under the [MIT License](./LICENSE.md).


Made with ❤️ by [Aira Jena]()