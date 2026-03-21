# classroom-frontend

React + Refine frontend for the Classroom project.

## Tech Stack

- React 19
- Vite
- Refine
- TypeScript
- Radix UI primitives and custom UI components

## Prerequisites

- Node.js 20+
- pnpm 10+

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development server

```bash
pnpm dev
```

## Build and Run

Build the app:

```bash
pnpm build
```

Start/preview app:

```bash
pnpm start
```

## Available Scripts

- `pnpm dev` starts Refine dev server
- `pnpm build` runs TypeScript build and Refine build
- `pnpm start` starts built app
- `pnpm refine` runs Refine CLI commands

## App Routes

Configured in `src/App.tsx`:

- `/` dashboard page
- `/subjects` subjects list
- `/subjects/create` create subject page

## Data Layer Status

Current data provider is local/mock-first:

- `src/providers/data.ts` implements a custom `dataProvider`
- `getList("subjects")` returns `MOCK_SUBJECTS`
- `getOne`, `create`, `update`, and `deleteOne` are placeholders and throw `Method not implemented`

Mock constants are in `src/providers/constants.ts`.

## Backend Integration Notes

A REST provider scaffold already exists (commented) in `src/providers/data.ts` using `createSimpleRestDataProvider`.

To connect to the backend API:

1. Replace current custom provider with `createSimpleRestDataProvider`.
2. Set API base URL to backend endpoint (example: `http://localhost:3000/api`).
3. Implement remaining backend CRUD endpoints to match Refine data provider expectations.

## Project Structure

- `src/App.tsx` route/resource registration
- `src/pages/` page components
- `src/providers/` data provider and constants
- `src/components/refine-ui/` reusable UI and layout components
- `src/types/` shared frontend types

## Notes

- This package is configured as an ESM app (`"type": "module"`).
- The app currently demonstrates dashboard and subjects management UI with mocked subject data.
