# Foodster — Codebase Workflow & Line-by-Line Explanation

---

## Project Overview

Foodster is a React + Vite web application for discovering recipes, planning meals, and generating grocery lists. It uses:

- **React 19** — UI library
- **React Router DOM v7** — client-side routing with loaders and actions
- **Tailwind CSS v4** — utility-first styling via the Vite plugin
- **React Hot Toast** — toast notification system
- **Axios** — HTTP client for API calls
- **React Hook Form** — (installed, available for future use)

---

## Entry Point — `index.html` + `src/main.jsx`

### `index.html`
The single HTML file Vite serves. It contains a `<div id="root">` which is the mount point for the entire React app. Vite injects the compiled JS bundle here automatically.

### `src/main.jsx`
```jsx
import { StrictMode } from 'react'        // React's development helper — warns about bad patterns
import { createRoot } from 'react-dom/client'  // React 18+ API to mount the app
import './index.css'                       // Global styles loaded here so they apply everywhere
import App from './App.jsx'               // Root component

createRoot(document.getElementById('root'))  // Grabs the <div id="root"> from index.html
  .render(
    <StrictMode>   // Wraps app in StrictMode — runs effects twice in dev to catch bugs
      <App />      // Mounts the root App component
    </StrictMode>
  )

```

**Flow:** Browser loads `index.html` → Vite serves the JS bundle → `main.jsx` runs → React mounts `<App />` inside `#root`.

---

## Build Config — `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'      // Enables JSX transform and Fast Refresh
import tailwindcss from '@tailwindcss/vite'   // Tailwind v4 Vite plugin (no postcss needed)

export default defineConfig({
  plugins: [react(), tailwindcss()],  // Both plugins registered
})
```
 
Tailwind v4 works as a Vite plugin directly — no `tailwind.config.js` or `postcss.config.js` required.

---

## Global Styles — `src/index.css`

```css
/* Google Fonts imports — two separate @import calls load all custom fonts */
@import url("https://fonts.googleapis.com/css2?family=Anton...");
@import url('https://fonts.googleapis.com/css2?family=Geist...');

@import "tailwindcss";  /* Activates Tailwind v4 — replaces the old @tailwind directives */

@theme {
  /* Custom breakpoints extending Tailwind's defaults */
  --breakpoint-sxs: 445px;
  --breakpoint-md: 768px;
  /* ...etc */

  /* Custom font tokens — used as font-{name} Tailwind classes */
  --font-anton: "Anton", sans-serif;    /* font-anton class */
  --font-oswald: "Oswald", sans-serif;  /* font-oswald class */
  --font-geist: "Geist", sans-serif;    /* font-geist class */
  --font-great: "Great Vibes", cursive; /* font-great class */
  --font-unna: "Unna", serif;           /* font-unna class */
  --font-playfair: "Playfair", serif;   /* font-playfair class */
}

body {
  font-family: var(--font-geist); /* Geist is the default body font */
}
```

### `.orangeButton` — Animated CTA Button
This is a custom multi-layer hover animation. The button has three invisible child `<div>`s (`.seconddiv`, `.thirddiv`, `.fourthdiv`) that act as animation panels.

- The button has `position: relative` and `overflow: hidden` so child panels stay clipped inside it.
- `::before` on the button sets the base orange background (`z-index: -2`).
- Each child div has `::before` and `::after` pseudo-elements positioned **outside** the button (above or below) at `z-index: -1`.
- On `:hover`, CSS transitions slide all pseudo-elements **into** the button, creating a wave-fill effect from left to right across 5 columns (each div covers 20% width).
- The darker orange (`oklch(70.5% 0.213 47.604)`) slides in over the base orange (`oklch(75% 0.183 55.934)`).

### `.animate-fade-in`
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(12px); }  /* starts invisible, 12px below */
  to   { opacity: 1; transform: translateY(0); }     /* fades in and slides up */
}
.animate-fade-in { animation: fade-in 0.6s ease both; }
```
Used on hero slider text so each slide's content fades in smoothly.

---

## Root Component — `src/App.jsx`

```jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// ...page imports
import { publicOnly, requireAuth } from "./utils/auth";  // Route guard functions
```

### Router Definition
```js
const router = createBrowserRouter([
  { path: "/",             element: <Home />,          loader: requireAuth  },
  { path: "/login",        element: <UserLogin />,     loader: publicOnly,  action: loginAction  },
  { path: "/signup",       element: <UserSignup />,    loader: publicOnly,  action: signupAction },
  { path: "/visit",        element: <Visit />,         loader: publicOnly   },
  { path: "/documentation",element: <Documentation />, loader: requireAuth  },
  { path: "*",             element: <ErrorPage />      },  // catch-all 404
]);
```

Each route object has:
- `path` — the URL pattern
- `element` — the React component to render
- `errorElement` — shown if the loader/action throws (uses `<ErrorPage />`)
- `loader` — a function that runs **before** the component renders (used for auth guards and data fetching)
- `action` — a function that runs when a `<Form method="post">` submits on that route

### `<App />` Component
```jsx
const App = () => (
  <>
    <Toaster position="top-right" reverseOrder={false} />  {/* Global toast container */}
    <RouterProvider router={router} />                      {/* Renders the matched route */}
  </>
);
```

`<Toaster>` is placed at the root so toast notifications appear on every page. `<RouterProvider>` takes the router config and renders the correct page component based on the current URL.

---

## Auth Utilities — `src/utils/auth.js`

```js
export const isAuthenticated = () => {
  const email = localStorage.getItem("email");
  const authToken = localStorage.getItem("authToken");
  return Boolean(email && authToken);  // true only if BOTH values exist in localStorage
};

export const requireAuth = () => {
  if (!isAuthenticated()) return redirect("/login");  // Not logged in → go to /login
  return null;  // Logged in → allow the route to render
};

export const publicOnly = () => {
  if (isAuthenticated()) return redirect("/");  // Already logged in → go to home
  return null;  // Not logged in → allow login/signup to render
};
```

These are React Router **loader functions**. They run before the route component mounts. Returning `redirect(...)` from a loader causes an immediate navigation — the component never renders.

**Auth flow:**
- Visiting `/` without a token → `requireAuth` redirects to `/login`
- Visiting `/login` while already logged in → `publicOnly` redirects to `/`
- After login, `email` and `authToken` are stored in `localStorage` as the session

---

## HTTP Layer

### `src/services/httpClient.js`
```js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";
// Reads from .env file (VITE_API_BASE_URL). Falls back to localhost:3000 if not set.

export const httpClient = axios.create({
  baseURL: API_BASE_URL,                        // All requests are relative to this base
  headers: { "Content-Type": "application/json" }, // Every request sends JSON
});
```

Creates a pre-configured Axios instance. All API calls use this instance so the base URL and headers are set once.

### `src/services/request.js`
```js
function normalizeResponse(response) {
  return { ok: true, status: response.status, data: response.data };
  // Wraps successful Axios response into a consistent shape
}

function normalizeError(error) {
  if (error.response) {
    return { ok: false, status: error.response.status, data: error.response.data };
    // Server responded with an error (4xx, 5xx) — normalize it, don't throw
  }
  throw error;
  // Network error or no response — re-throw so the caller can catch it
}

export async function request(config) {
  try {
    const response = await httpClient.request(config);
    return normalizeResponse(response);
  } catch (error) {
    return normalizeError(error);
  }
}

// Convenience wrappers for each HTTP method:
export const get    = (url, config)       => request({ ...config, method: "get",    url });
export const post   = (url, data, config) => request({ ...config, method: "post",   url, data });
export const put    = (url, data, config) => request({ ...config, method: "put",    url, data });
export const patch  = (url, data, config) => request({ ...config, method: "patch",  url, data });
export const remove = (url, config)       => request({ ...config, method: "delete", url });
```

Every API call returns `{ ok: boolean, status: number, data: any }`. This means callers never need try/catch for HTTP errors — they just check `ok`.

### `src/services/authService.js`
```js
import { post } from "./request";

export async function loginUser({ email, password }) {
  return post("/login", { email, password });
  // POST http://localhost:3000/login with JSON body
}

export async function signupUser({ email, password }) {
  return post("/signup", { email, password });
  // POST http://localhost:3000/signup with JSON body
}
```

Thin wrappers over the `post` helper. Keeps API endpoint strings in one place.

---

## Pages

### `src/pages/UserLogin.jsx`

```jsx
const registrationInfo = {
  heading: "Login to your account",
  subheading: "Welcome back! Please enter your details",
  button: "Login",
  type: "login",
  navigateTo: { text: "Don't have an account?", link: "Sign up", to: "/signup" },
};
// Config object passed as props to the shared Registration component
```

```jsx
const UserLogin = () => {
  const actionData = useActionData();       // Gets the return value from the action function below
  const navigation = useNavigation();       // Tracks router navigation state ("idle", "submitting", "loading")

  useEffect(() => {
    if (actionData?.message) toast.error(actionData.message);
    // If the action returned an error message, show it as a toast
  }, [actionData]);

  return (
    <Registration
      registrationInfo={registrationInfo}
      errorMessage={actionData?.message}         // Also passed to show inline in the form
      isSubmitting={navigation.state === "submitting"}  // Disables button while form is posting
    />
  );
};
```

```js
export async function action({ request }) {
  // This runs when the <Form method="post"> inside Registration submits on the /login route
  const formData = await request.formData();   // Reads the submitted form fields
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) return { message: "Please enter both email and password" };
  // Returning an object (not a redirect) makes it available via useActionData()

  try {
    const { ok, data } = await loginUser({ email, password });

    if (!ok) return { message: data?.message || "Login failed. Please try again." };

    localStorage.setItem("email", data?.user?.email || email);  // Persist session
    localStorage.setItem("authToken", data?.token || "");

    toast.success(data?.message || "Login successful");
    return redirect("/");  // Navigate to home on success
  } catch {
    return { message: "Cannot reach server. Please check backend and try again." };
  }
}
```

### `src/pages/UserSignup.jsx`

Identical structure to `UserLogin`. Uses `signupUser` from authService and redirects to `/login` on success instead of `/`. The large commented-out block is the original manual form implementation before it was refactored into the shared `Registration` component.

### `src/pages/ErrorPage.jsx`

```jsx
const ErrorPage = () => {
  const error = useRouteError();  // React Router hook — gets the error thrown by a loader/action/component

  let title = "An error occurred";
  let message = "Something went wrong while loading this page.";

  if (isRouteErrorResponse(error)) {
    // isRouteErrorResponse checks if it's a router-level error (like a 404 or redirect error)
    title = `${error.status} ${error.statusText}`;
    if (typeof error.data === "string") message = error.data;
  } else if (error instanceof Error) {
    message = error.message;  // JavaScript runtime error
  }

  return (
    // Renders a centered card with the error title, message, and a link back to /login
  );
};
```

This component is set as `errorElement` on routes. React Router renders it automatically when a loader, action, or the component itself throws an error.

### `src/pages/Home.jsx`

The landing page. Contains two main parts:

**`HeroSlider` component (defined inside the file):**
```jsx
const slides = [ /* 6 objects, each with: image, tag, heading, highlight, sub */ ];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);    // Index of the active slide (0–5)
  const [animating, setAnimating] = useState(false);  // Prevents rapid clicking

  const goTo = useCallback((index) => {
    if (animating) return;       // Ignore if already transitioning
    setAnimating(true);
    setCurrent(index);           // Switch slide
    setTimeout(() => setAnimating(false), 700);  // Unlock after CSS transition completes
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);
  // Modulo arithmetic keeps the index wrapping (0 → 5 → 0)

  useEffect(() => {
    const timer = setInterval(next, 5000);  // Auto-advance every 5 seconds
    return () => clearInterval(timer);      // Cleanup on unmount or when `next` changes
  }, [next]);
```

**Rendering the slider:**
- All 6 background images are rendered simultaneously as `position: absolute` divs
- Only the active one has `opacity: 1`, others have `opacity: 0`
- `transition-opacity duration-700` on each div creates the crossfade
- Text content uses `key={current}` to force React to remount the element on slide change, which re-triggers the `animate-fade-in` CSS animation
- Prev/Next buttons call `prev()` and `next()`
- Dot indicators call `goTo(i)` — the active dot has `w-8` (wider pill shape) vs `w-2` for inactive

**Rest of `Home.jsx`:**
- Features section — 3 static cards with emoji icons
- Visual break — full-width `foodster1.jpeg` with a quote overlay
- Testimonials — 3 cards with avatar initials and quotes
- CTA banner — `orangeBg.jpeg` background with a signup link
- Footer — logo, copyright, nav links

### `src/pages/Documentation.jsx`
Currently a placeholder (`<div>Documentation</div>`). Protected by `requireAuth`.

---

## Shared Component — `src/components/Registration.jsx`

Used by both `UserLogin` and `UserSignup`. Accepts props to customize its content:

```jsx
const Registration = ({ registrationInfo, errorMessage, isSubmitting }) => {
  const [showPassword, setShowPassword] = useState(false);  // Toggles password visibility
```

**Layout:** Two-column card
- Left side: the form (always visible)
- Right side: a food image with an overlay card (hidden on mobile via `hidden md:block`)

**Form:**
```jsx
<Form method="post" className="w-full max-w-sm">
```
React Router's `<Form>` component. When submitted, it serializes the form fields and calls the `action` function of the current route — no `onSubmit` handler needed.

```jsx
<input type="email" name="email" ... />
<input type={showPassword ? "text" : "password"} name="password" ... />
```
Uncontrolled inputs — values are read by the action via `formData.get("name")`, not React state.

```jsx
<button type="button" onClick={() => setShowPassword(v => !v)}>
  {/* SVG eye icon — switches between open eye and crossed-out eye */}
</button>
```
`type="button"` prevents this from submitting the form.

```jsx
{errorMessage && <p className="text-red-600">{errorMessage}</p>}
// Shows inline error if the action returned a message

<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Please wait..." : registrationInfo.button}
</button>
// Disabled and shows loading text while the form action is running

<Link to={registrationInfo.navigateTo.to}>
  {registrationInfo.navigateTo.link}
</Link>
// Dynamic navigation link — "Sign up" on login page, "Login" on signup page
```

---

## Data & Request Flow (Full Login Example)

```
User fills form → clicks "Login"
  ↓
<Form method="post"> serializes fields
  ↓
React Router calls action() in UserLogin.jsx
  ↓
action() reads formData → validates fields
  ↓
calls loginUser({ email, password }) from authService.js
  ↓
authService calls post("/login", data) from request.js
  ↓
request.js calls httpClient.request() (Axios)
  ↓
Axios sends POST to http://localhost:3000/login
  ↓
Response comes back → normalizeResponse() or normalizeError()
  ↓
action() checks ok:
  - false → returns { message: "..." } → useActionData() picks it up → toast + inline error shown
  - true  → saves email + token to localStorage → redirect("/")
              ↓
           requireAuth loader on "/" checks localStorage → passes → Home renders
```

---

## File Structure Summary

```
src/
├── main.jsx              # App entry point — mounts React
├── App.jsx               # Router config + Toaster
├── index.css             # Global styles, Tailwind, custom fonts, animations
├── pages/
│   ├── Home.jsx          # Landing page with hero slider
│   ├── UserLogin.jsx     # Login page + route action
│   ├── UserSignup.jsx    # Signup page + route action
│   ├── ErrorPage.jsx     # Error boundary page
│   └── Documentation.jsx # Placeholder (protected)
├── components/
│   └── Registration.jsx  # Shared login/signup form UI
├── services/
│   ├── httpClient.js     # Axios instance with base URL
│   ├── request.js        # Normalized HTTP helpers (get/post/put/patch/remove)
│   └── authService.js    # loginUser / signupUser API calls
└── utils/
    └── auth.js           # isAuthenticated / requireAuth / publicOnly loaders
```
