# FitLog

FitLog is a responsive workout library and workout planning website built with Next.js. Users can browse workouts from an API, open dynamic workout detail pages, add workouts to today's plan, save workouts for later, and manage their workout list.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Context API
- React Hot Toast
- Lucide React
- FitLog REST API
- localStorage

## Key Features

1. Responsive workout library for desktop, tablet, and mobile.
2. Dynamic workout details pages using Next.js App Router.
3. Add workouts to Today's Plan with a five-workout limit.
4. Save workouts for later.
5. My Plan page with Exercises, Minutes, and Calories metrics.
6. Mark workouts as done and remove planned workouts.
7. Search and sort workouts by duration, calories, or rating.
8. localStorage persistence for plan and saved workouts.
9. Toast notifications for workout actions.
10. Custom 404 page and loading state.

## API

All workout data:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Project Structure

- `app/` - Next.js routes and pages
- `components/` - reusable UI components
- `context/` - global FitLog state
- `lib/` - API utilities

## Author

FitLog Assignment Project