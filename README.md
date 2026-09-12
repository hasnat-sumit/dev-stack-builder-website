# Dev Stack Builder
"Build your ideal development stack — pick the right frontend, backend, database, and tooling for your project."

## 📖 Description

[Dev Stack Builder] is a React + TypeScript application that lets users browse a list of technologies and build their own custom tech stack by selecting and deselecting items. Selected technologies are tracked in state and displayed as an interactive list that users can add to or remove from at any time.

## 🛠️ Built With

- **React** – Component-based UI library
- **TypeScript** – Static typing for safer, more predictable code
- **React Hooks** (`useState`, `useEffect`) – State management and side effects
- **Tailwind**
- **Vite**
- 
## ✨ Features

1. **Toggle Selection** – Click any technology to add it to your stack, or click it again to remove it.
2. **Live Stack Preview** – Instantly see your currently selected technologies update as you pick them.
3. **Remove Individually** – Remove a specific technology from your stack without affecting the rest of your selections.

---

## ❓ React Concepts — Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript/TypeScript files. It's used because it makes it much easier to describe what the UI should look like — we can mix markup and logic together instead of building elements manually with JavaScript functions.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent, and the component can't change them itself. State is data that a component manages *internally* and can update over time. Basically: props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own data, and re-renders the component whenever that data changes. In this project, it's used to track the list of selected technologies:
```tsx
const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
```
This keeps track of which technologies the user has picked so far.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run code in response to a component rendering or certain values changing — commonly used for things like fetching data, subscriptions, or timers. It was needed to load the JSON data because fetching data is a "side effect" that shouldn't happen during rendering itself; `useEffect` lets us fetch the technology list once when the component first mounts and then store it in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of which list item is which between re-renders. Without a stable, unique key, React can get confused about which items changed, were added, or removed, which can cause bugs or unnecessary re-rendering of the wrong elements.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. For example, showing a message only when no technologies have been selected yet:


**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props, like `<Child technology={tech} />`. For a child to send data *back up* to the parent, the parent passes down a function as a prop (e.g. `onSelect`), and the child calls that function with the data it wants to send, like `onSelect(technology)`. This is how, for example, `toggleStack` or `removeFromStack` could be passed down and triggered by a click inside a child component.

