# SACKOBA Qatar Website - Project Rules

## 🎯 Project Overview

This is the official website for SACKOBA Qatar (St. Anthony's College Kandy Old Boys' Association Qatar), built with React 18, TypeScript, TailwindCSS, and Vite. The project focuses on community building, event management, and showcasing the association's activities.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.0.14
- **Styling:** TailwindCSS 3.4.16 with utility-first approach
- **State Management:** Zustand 5.0.2 for global state
- **Routing:** React Router DOM 7.0.2
- **UI Components:** Headless UI, Heroicons, Lucide React
- **Animations:** Framer Motion 11.13.1
- **Image Optimization:** Sharp, React Lazy Load Image Component
- **Package Manager:** pnpm (preferred)

---

## 📁 Project Structure Rules

### Component Organization

```
src/
├── components/
│   ├── about/           # About page components
│   ├── college-history/ # College history components
│   ├── contact/         # Contact page components
│   ├── events/          # Event-related components
│   ├── exco/            # Executive committee components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── shared/          # Reusable UI components
│   └── video-gallery/   # Video gallery components
├── data/                # Static data and configurations
├── hooks/               # Custom React hooks
├── pages/               # Page-level components
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── styles/              # Global styles and fonts
```

### File Naming Conventions

- **Components:** PascalCase (e.g., `EventImageGallery.tsx`)
- **Hooks:** camelCase with 'use' prefix (e.g., `useEventFiltering.ts`)
- **Utilities:** camelCase (e.g., `eventUtils.ts`)
- **Types:** camelCase with descriptive names (e.g., `collegeHistoryTypes.ts`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `EVENT_CATEGORIES`)

---

## ⚛️ React & TypeScript Best Practices

### Component Guidelines

1. **Component Size Limit:** Maximum 100 lines per component
2. **Single Responsibility:** Each component should have one clear purpose
3. **Functional Components:** Use functional components with hooks exclusively
4. **TypeScript Interfaces:** Define clear interfaces for all props and state

```tsx
// ✅ Good Example
interface EventCardProps {
  event: EventData;
  onImageClick: (imageId: string) => void;
  isExpanded?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  onImageClick, 
  isExpanded = false 
}) => {
  // Component logic here (max 100 lines)
};
```

### TypeScript Rules

1. **Strict Typing:** Avoid `any` type, use `unknown` or specific types
2. **Interface Definitions:** Create interfaces in `src/types/` directory
3. **Generic Types:** Use generics for reusable components
4. **Optional Props:** Use `?` for optional properties
5. **Function Types:** Define function signatures clearly

```tsx
// ✅ Good Example
interface SearchFilterProps<T> {
  items: T[];
  onFilter: (filteredItems: T[]) => void;
  searchFields: (keyof T)[];
  placeholder?: string;
}
```

### Custom Hooks

1. **Extract Complex Logic:** Move complex state logic to custom hooks
2. **Reusability:** Create hooks for shared functionality
3. **Naming:** Use 'use' prefix and descriptive names
4. **Return Objects:** Return objects for multiple values

```tsx
// ✅ Good Example
const useEventFiltering = (events: EventData[]) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState('');
  
  return {
    filteredEvents,
    searchTerm,
    setSearchTerm,
    clearFilters: () => setSearchTerm('')
  };
};
```

---

## 🎨 TailwindCSS Styling Rules

### Utility-First Approach

1. **No Custom CSS:** Use TailwindCSS utilities exclusively
2. **Responsive Design:** Mobile-first responsive design
3. **Component Variants:** Use `clsx` for conditional classes
4. **Design System:** Follow consistent spacing, colors, and typography

```tsx
// ✅ Good Example
const Button: React.FC<ButtonProps> = ({ variant, size, children, ...props }) => {
  return (
    <button
      className={clsx(
        'font-medium rounded-lg transition-colors duration-200',
        {
          'bg-blue-600 hover:bg-blue-700 text-white': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-900': variant === 'secondary',
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg'
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Color Palette

- **Primary:** Blue tones for main actions and branding
- **Secondary:** Gray tones for secondary elements
- **Accent:** Gold/yellow for highlights and special elements
- **Status:** Green (success), Red (error), Yellow (warning)

### Responsive Breakpoints

```css
/* Follow TailwindCSS breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

---

## 🗂️ State Management Rules

### Zustand Store Structure

1. **Global State Only:** Use Zustand for truly global state
2. **Local State First:** Prefer local state for component-specific data
3. **Store Slicing:** Create separate stores for different domains
4. **Immutable Updates:** Always return new state objects

```tsx
// ✅ Good Example
interface EventStore {
  events: EventData[];
  selectedEvent: EventData | null;
  isLoading: boolean;
  setEvents: (events: EventData[]) => void;
  selectEvent: (event: EventData) => void;
  clearSelection: () => void;
}

const useEventStore = create<EventStore>((set) => ({
  events: [],
  selectedEvent: null,
  isLoading: false,
  setEvents: (events) => set({ events }),
  selectEvent: (event) => set({ selectedEvent: event }),
  clearSelection: () => set({ selectedEvent: null })
}));
```

---

## 🖼️ Image Management Rules

### Image Organization

1. **Directory Structure:** `/public/images/event_images/YEAR/EVENT_NAME/`
2. **Optimization:** Use automated image optimization scripts
3. **Multiple Formats:** Support WebP and JPEG formats
4. **Responsive Sizes:** Generate multiple sizes (thumbnail to xlarge)
5. **Lazy Loading:** Implement lazy loading for performance

### Image Optimization Workflow

```bash
# Complete image setup
npm run setup-images

# Individual steps
npm run copy-images          # Copy from assets to public
npm run generate-event-data  # Generate metadata
npm run optimize-images      # Optimize for web
```

### Image Component Standards

```tsx
// ✅ Good Example
const OptimizedImage: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className, 
  sizes = "(max-width: 768px) 100vw, 50vw" 
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      loading="lazy"
      effect="blur"
    />
  );
};
```

---

## 🔍 Event Data Management

### Event Data Structure

```tsx
interface EventData {
  id: string;
  name: string;
  year: number;
  date: string;
  location: string;
  category: EventCategory;
  description: string;
  attendeeCount?: number;
  images: EventImage[];
  tags: string[];
}

interface EventImage {
  id: string;
  filename: string;
  alt: string;
  description?: string;
  tags: string[];
  photographer?: string;
}
```

### Category System

- **Sports** 🏆: Sports tournaments, competitions
- **Cultural** 🎭: Cultural celebrations, traditional events
- **Religious** 🙏: Religious ceremonies, feast days
- **Social** 🤝: Social gatherings, community events
- **Academic** 🎓: AGMs, educational events
- **Community** 🏘️: Community service, outreach

---

## 🧪 Testing Standards

### Testing Strategy

1. **Unit Tests:** Test individual components and utilities
2. **Integration Tests:** Test component interactions
3. **Accessibility Tests:** Ensure WCAG compliance
4. **Visual Regression:** Test UI consistency

### Testing Tools

- **Jest:** Unit testing framework
- **React Testing Library:** Component testing
- **ESLint:** Code quality and consistency
- **TypeScript:** Compile-time error checking

---

## 📦 Development Workflow

### Git Workflow

1. **Branch Naming:** `feature/component-name` or `fix/issue-description`
2. **Commit Messages:** Use conventional commits format
3. **Pull Requests:** Require code review before merging
4. **Main Branch:** Keep main branch always deployable

### Development Commands

```bash
# Development
pnpm dev                 # Start development server
pnpm build              # Build for production
pnpm preview            # Preview production build
pnpm lint               # Run ESLint

# Image Management
pnpm run setup-images   # Complete image setup
pnpm run copy-images    # Copy images
pnpm run optimize-images # Optimize images
```

### Code Quality

1. **ESLint Configuration:** Follow project ESLint rules
2. **Prettier Integration:** Auto-format code on save
3. **TypeScript Strict Mode:** Enable strict type checking
4. **Import Organization:** Group and sort imports consistently

---

## 🚀 Performance Optimization

### React Performance

1. **React.memo:** Memoize components to prevent unnecessary re-renders
2. **useMemo/useCallback:** Memoize expensive calculations and functions
3. **Code Splitting:** Use React.lazy for route-based code splitting
4. **Bundle Analysis:** Monitor bundle size and optimize imports

### Image Performance

1. **Lazy Loading:** Implement lazy loading for all images
2. **WebP Format:** Prefer WebP with JPEG fallback
3. **Responsive Images:** Use appropriate sizes for different viewports
4. **Compression:** Optimize image quality vs. file size

### General Performance

1. **Minimize Re-renders:** Optimize state updates and component structure
2. **Efficient Queries:** Optimize data fetching and caching
3. **Tree Shaking:** Ensure unused code is eliminated
4. **Critical CSS:** Inline critical CSS for faster initial render

---

## 🌐 Accessibility Guidelines

### WCAG Compliance

1. **Semantic HTML:** Use proper HTML elements and structure
2. **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible
3. **Screen Reader Support:** Provide proper ARIA labels and descriptions
4. **Color Contrast:** Maintain sufficient color contrast ratios
5. **Focus Management:** Implement proper focus management

### Implementation

```tsx
// ✅ Good Example
const ImageModal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>{image.alt}</Dialog.Title>
        <img 
          src={image.src} 
          alt={image.alt}
          role="img"
          aria-describedby="image-description"
        />
        <p id="image-description">{image.description}</p>
        <button 
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};
```

---

## 📚 Documentation Standards

### Code Documentation

1. **Function Comments:** Document complex functions and their parameters
2. **Component Props:** Document all props with JSDoc comments
3. **README Updates:** Keep README.md current with project changes
4. **Type Documentation:** Document complex types and interfaces

### Component Documentation

```tsx
/**
 * EventImageGallery displays a grid of event images with search and filter capabilities.
 * 
 * @param events - Array of event data to display
 * @param onImageClick - Callback when an image is clicked
 * @param searchTerm - Current search term for filtering
 * @param selectedCategory - Currently selected category filter
 */
const EventImageGallery: React.FC<EventImageGalleryProps> = ({
  events,
  onImageClick,
  searchTerm,
  selectedCategory
}) => {
  // Component implementation
};
```

---

## 🔒 Security Best Practices

### Data Security

1. **No Sensitive Data:** Never commit API keys or sensitive information
2. **Environment Variables:** Use environment variables for configuration
3. **Input Validation:** Validate all user inputs
4. **XSS Prevention:** Sanitize user-generated content

### Dependencies

1. **Regular Updates:** Keep dependencies updated
2. **Security Audits:** Run `npm audit` regularly
3. **Minimal Dependencies:** Only include necessary packages
4. **Trusted Sources:** Use well-maintained, trusted packages

---

## 🎯 Project-Specific Rules

### SACKOBA Qatar Context

1. **Content Accuracy:** Ensure all historical information is accurate
2. **Cultural Sensitivity:** Respect cultural and religious contexts
3. **Community Focus:** Prioritize community building features
4. **Alumni Engagement:** Design for alumni interaction and participation

### Event Management

1. **Chronological Organization:** Organize events by year and date
2. **Rich Metadata:** Include comprehensive event details
3. **Search Functionality:** Enable easy discovery of events and images
4. **Category System:** Use consistent categorization across all events

### Executive Committee (Exco) Management

1. **Historical Records:** Maintain accurate records of all committees
2. **Role Documentation:** Clearly document member roles and responsibilities
3. **Photo Management:** Organize committee photos by year
4. **Transition Documentation:** Document leadership changes and transitions

---

## 📋 Checklist for New Features

### Before Implementation

- [ ] Review existing components for reusability
- [ ] Define TypeScript interfaces
- [ ] Plan responsive design approach
- [ ] Consider accessibility requirements
- [ ] Identify performance implications

### During Implementation

- [ ] Follow component size limits (max 100 lines)
- [ ] Use TailwindCSS utilities exclusively
- [ ] Implement proper error handling
- [ ] Add loading states where appropriate
- [ ] Include proper TypeScript typing

### After Implementation

- [ ] Test on multiple devices and browsers
- [ ] Verify accessibility compliance
- [ ] Run performance audits
- [ ] Update documentation
- [ ] Add unit tests if applicable

---

## 🔄 Maintenance Guidelines

### Regular Tasks

1. **Dependency Updates:** Monthly dependency updates
2. **Image Optimization:** Quarterly image optimization review
3. **Performance Audits:** Quarterly performance reviews
4. **Content Updates:** Regular content and event updates
5. **Security Audits:** Monthly security dependency checks

### Long-term Maintenance

1. **Technology Updates:** Annual review of major dependencies
2. **Design Refresh:** Periodic design and UX improvements
3. **Feature Expansion:** Continuous feature development based on community needs
4. **Archive Management:** Proper archival of historical content
