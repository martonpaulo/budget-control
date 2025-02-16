# 💰 Budget Control - Financial Tracker

![License](https://img.shields.io/github/license/martonpaulo/budget-control) ![Last Commit](https://img.shields.io/github/last-commit/martonpaulo/budget-control) ![React Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/budget-control/react) ![TypeScript Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/budget-control/dev/typescript) ![Test and Deploy Status](https://github.com/martonpaulo/budget-control/actions/workflows/deploy.yml/badge.svg)

**Budget Control** is a simple and intuitive financial tracker to manage your income and expenses. Easily log transactions, track your balance, and stay in control of your finances.

<br />

<img alt="Recording of live application" src="public/uploads/recording.gif" />

🔗 **Live Project:** [martonpaulo.github.io/budget-control](https://martonpaulo.github.io/budget-control)

<br />

Check out the Figma prototype here (Portuguese): [Figma Link](https://www.figma.com/design/maWgKNWAsNcFcleGuZ5RaO/Budget-Control?node-id=0-1&t=UVyue73CYu247M8A-1).

This project is based on a RocketSeat tutorial.

For more of my work, visit my portfolio: [martonpaulo.com](https://martonpaulo.com).

## 🔧 Features

1. **Summary Dashboard**: Instantly see your total income, expenses, and overall balance.
2. **Add Transactions**: Quickly log your income and expenses.
3. **List Transactions**: View all transactions in a clear table format.
4. **Pagination**: Easily navigate through multiple pages of transactions.
5. **Search and Filter**: Find specific transactions using smart filtering.

## 🛠️ Technologies Used

This project is built using React, Vite, TypeScript, Styled Components, Radix UI, JSON Server, Axios, Context API, React Compiler and GitHub Actions.

## 🚀 Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/martonpaulo/budget-control.git`
2. Navigate to the project directory: `cd budget-control`
3. Install the dependencies: `npm install`

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`** - Starts the development server at `http://localhost:3000/budget-control`.
- **`npm run build`** - Builds the project for production, outputting the files to the `dist` folder.
- **`npm run lint`** - Runs ESLint to lint the code and ensure code quality.
- **`npm run server`** - Starts the JSON Server at `http://localhost:3333/`.

## 📦 API Service

The project uses a JSON Server to simulate a backend API service. The server runs on `http://localhost:3333/` and serves the transactions data.

If you don't want to use the JSON Server, you can use the localStorage to store the transactions data. To do this, you can set the `VITE_USE_LOCAL_STORAGE` environment variable to `true` in the `.env` file.

## TODO List

- [x] Set up project with Vite, React, and TypeScript
- [x] Add README description
- [x] Add License
- [x] Set up ESLint
- [x] Add project favicon
- [x] Change port to 3000
- [x] Initial setup by clearing unnecessary files
- [x] Update `package.json` settings
- [x] Add Figma Prototype
- [x] Set up GitHub repository
- [x] Add GitHub description
- [x] Add GitHub Actions and deploy to GitHub Pages
- [x] Modify overall design: font, colors, etc.
- [x] List project technologies
- [x] List project features
- [x] Add pagination to transactions
- [x] Alternative to JSON Server
- [x] Set character limit for form inputs
- [x] Set delay only for the first request
- [ ] Add delete transaction feature
- [ ] Add responsive layout
- [ ] Add project recording
- [ ] Add project to portfolio

## 📄 License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](LICENSE) file.
