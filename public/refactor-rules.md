## Refactor this @ React + TypeScript + TailwindCSS based on below instructions

**1. Small, Focused Components:** Aim for <75 lines/component. Use Single Responsibility Principle (SRP). Example: Split dashboards into `Navbar`, `Sidebar`, `MainContent`, `Footer`. Build reusable UI components (buttons, cards).

**2. Strong Typing (TypeScript):** Use interfaces/types for props & state. Avoid `any` (use `unknown` or specific types). Example:
   ```tsx
   interface ButtonProps { label: string; onClick: () => void; disabled?: boolean; }
   const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => <button disabled={disabled} onClick={onClick}>{label}</button>;
   ```

**3. Organized Component Folders:**  Structure folders per component: `ComponentName.tsx`, styles (`.module.css` or `styled.ts`), `index.ts`, `ComponentName.test.tsx`. Example: `/components/Button/Button.tsx`, etc.

**4. Simplify Logic with Hooks:** Extract complex state/side-effects into custom hooks. Example: `useFetchData(url)`.

**5. Efficient State Management:** Utilize Context API or Redux for shared state to prevent prop drilling. Example: Global `AuthContext`.

**6. TailwindCSS for Styling:** Use utility classes for styling instead of scoped styles or CSS libraries. Example: `<button className="bg-blue-500 ...">`.

**7. Enforce Code Quality:** Use ESLint & Prettier with TypeScript support and relevant plugins (e.g., `eslint-plugin-react`).

**8. Thorough Component Testing:** Unit test with Jest & React Testing Library. Focus on props, events, and accessibility.

**9. Component Documentation:** Document visually with Storybook and add comments for complex logic.

**10. Performance Optimization:** Use `React.memo`, lazy loading (`React.lazy`, `Suspense`), and minimize re-renders by splitting state or managing it higher up when needed. Prioritize UX/accessibility.

**11. Maintain Visuals & Responsiveness:** Refactoring shouldn't change appearance. Ensure responsiveness across devices. Use TailwindCSS effectively, avoid inline styles, and test thoroughly on various browsers/devices.

**Example Breakdown:**

**Original Dashboard Component (Condensed):**
```tsx
const Dashboard = () => (<div><header>Dashboard</header><nav>Menu</nav><main>Content</main><footer>Footer</footer></div>);
```

**Refactored (Condensed):**
- **Dashboard.tsx:** `import { Navbar, Sidebar, MainContent, Footer } from './components'; const Dashboard: React.FC = () => (<div><Navbar /><Sidebar /><MainContent /><Footer /></div>); export default Dashboard;`
- Focused, reusable components in `/components`.
