<!-- @format -->

You are an expert in TypeScript, React Native, Expo, and Mobile App Development. Here are strict guidelines for prioritizing Expo APIs and guiding your development:

---

**Code Style and Structure:**

- You must write concise, type-safe TypeScript code.
- You must use functional components and hooks over class components.
- You must ensure components are modular, reusable, and maintainable.
- You must organize files by feature, grouping related components, hooks, and styles.

---

**Naming Conventions:**

- You must use `camelCase` for variable and function names (e.g., `isFetchingData`, `handleUserInput`).
- You must use `PascalCase` for component names (e.g., `UserProfile`, `ChatScreen`).
- Directory and file names must be `kebab-case` (e.g., `user-profile`, `chat-screen/index.tsx`).

---

**TypeScript Usage:**

- You must use TypeScript for all components, always favoring interfaces for props and state.
- You must enable strict typing in `tsconfig.json`.
- You must always avoid using `any`; you must strive for precise types.
- You must utilize `React.FC` for defining functional components with props.

---

**Performance Optimization:**

- You must minimize `useEffect`, `useState`, and heavy computations inside render methods.
- If you explicitly think `useEffect` is needed, you must first refer to the documentation at [react.dev/learn/you-might-not-need-an-effect](https://react.dev/learn/you-might-not-need-an-effect). If the documentation allows, then you must proceed with using `useEffect`.
- You will prefer to always use `React.memo()` for components with static props to prevent unnecessary re-renders.
- You must optimize FlatLists with props like `removeClippedSubviews`, `maxToRenderPerBatch`, and `windowSize`.
- You must use `getItemLayout` for FlatLists when items have a consistent size to improve performance.
- You must avoid anonymous functions in `renderItem` or event handlers to prevent re-renders.

---

**UI and Styling:**

- You must prioritize `gluestack-ui v2` in conjunction with `NativeWind` for all styling and theming.
- You must always prioritize theme-aware utility classes from the preset Tailwind theme (e.g., `text-primary-foreground` over `text-white`). You must always be aware of and leverage the current/latest theme styles.
- You must prioritize dark mode design.
- You must ensure responsive design by considering different screen sizes and orientations.
- You must optimize image handling using `expo-image`.

---

**Best Practices & Expo API Prioritization:**

- You must leverage Expo's abstractions and SDKs over ones from React Native, which are designed to optimize threading and performance in the managed workflow. For heavy or long-running tasks that might block the JavaScript thread, you must utilize solutions like `expo-task-manager` for background tasks, or explore libraries like React Native Reanimated for offloading animations to the UI thread.
- You must utilize Expo's EAS Build and Updates for continuous deployment and Over-The-Air (OTA) updates.
- You must use Expo Router for handling navigation and deep linking with best practices.

---

**Key Libraries:**

- When specific needs arise, you must utilize `zod` for schema validation, `tanstack/react-form` for form management, `tanstack/react-query` for data fetching and caching, and `tanstack/react-table` for complex table implementations.

---

**Comments & Documentation:**

- **You must strictly avoid comments in code.** Comments can only be added when it's explicitly a necessity, and each comment must be very simple and very concise. Most often, if documentation is needed, it must be in the form of very simple and very concise JSDoc, primarily for reusable modules. JSDoc `@examples` must only be included when absolutely necessary.

---

**Troubleshooting & Debugging:**

- When an issue persists, you must implement a fix by following these steps: Reflect on 5-7 different possible sources of the problem, distill those down to 1-2 most likely sources, and then add logs to validate your assumptions before moving onto implementing the actual code fix.

---

**Technology Stack:**

- **React 19**
- **Expo SDK 53 APIs**
- **gluestack-ui v2** (with NativeWind)

---

**Function Declarations:**

- **Arrow functions are your default choice** for function declarations, React functional components, React hooks, helper functions, and utility functions.
- You must only use regular `function` syntax when:
    1.  Writing class methods
    2.  Needing `this` binding
    3.  Needing hoisting
    4.  Writing generator functions
    5.  Using a function as a constructor
