# Cloud Computing Study Hub

A modern, responsive Next.js 16 application for exploring cloud computing study materials. This project features 4 comprehensive modules with 200+ questions, detailed answers, and advanced search functionality.

## Features

✨ **Module Overview**
- 4 comprehensive study modules covering cloud computing fundamentals
- Module I: Basics of Cloud Computing
- Module II: Cloud Services & Insight
- Module III: Cloud Solution Offerings (AWS)
- Module IV: Cloud Storage & Security

🔍 **Smart Search**
- Search across modules and questions in real-time
- Filter by question number, tags, CO (Course Outcomes), and marks
- Quick module filtering on the home page

📊 **Progress Tracking**
- Visual progress bars for each module
- Statistics showing answered vs. practice questions
- Overall course completion metrics

🎨 **Modern Design**
- Dark theme optimized for study sessions
- Responsive design for all screen sizes
- Smooth animations and transitions
- Color-coded modules for easy identification

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page with module grid
├── not-found.tsx           # 404 error page
└── modules/
    └── [id]/
        └── page.tsx        # Module detail page

components/
├── module-card.tsx         # Module preview card
├── question-accordion.tsx  # Expandable question component
└── search-bar.tsx          # Reusable search input

lib/
└── data.ts                 # All study data and types

styles/
└── globals.css             # Global styles
```

## Data Structure

The application uses TypeScript types for type-safe data handling:

### Module
```typescript
type ModuleData = {
  id: number;
  title: string;
  subtitle: string;
  color: string;           // Primary color (hex)
  bg: string;              // Background color (hex)
  accent: string;          // Accent color (hex)
  topics: string;          // Comma-separated topics
  hours: string;           // Lecture hours
  questions: Question[];
};
```

### Question
```typescript
type Question = {
  no: number;
  tag?: string;            // Exam tag (e.g., "Exam Q2(a)")
  marks?: string;          // Marks info (e.g., "2+4")
  co?: string;             // Course Outcome (e.g., "CO1 · Understand/LOCQ")
  text: string;            // Question text
  answer?: AnswerSection[]; // Answer sections with headings and content
};
```

## Key Components

### ModuleCard
Displays module preview with:
- Module title and subtitle
- Topic tags
- Progress bar with percentage
- Hover effects with color-coded accents

### QuestionAccordion
Expandable question component with:
- Question number and metadata (tag, marks, CO)
- Collapsible answer sections
- Color-coded styling matching the module

### SearchBar
Reusable search input with:
- Real-time filtering
- Clear button functionality
- Accessible design

## Getting Started

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

The application will start at `http://localhost:3000`.

### Building for Production
```bash
pnpm build
pnpm start
```

## Pages

### Home (`/`)
- Module grid with search functionality
- Overall statistics (total modules, questions, answered, practice)
- Module cards showing progress and metadata

### Module Detail (`/modules/[id]`)
- Full module information with progress
- Topics covered section
- Complete question list with search
- Expandable answers for each question

### 404 Page
- Friendly error page for non-existent routes
- Quick navigation back to home

## Styling Approach

The application uses:
- **Tailwind CSS** for utility-based styling
- **Inline styles** for dynamic color application (module-specific colors)
- **CSS animations** for smooth transitions
- **Backdrop blur** for modern glassmorphic effects
- **Gradient backgrounds** for visual depth

## Color System

Each module has a unique color scheme:
- **Module I** (Blue): #0ea5e9
- **Module II** (Purple): #8b5cf6
- **Module III** (Amber): #f59e0b
- **Module IV** (Green): #10b981

Colors are applied to:
- Module cards
- Progress bars
- Question badges
- Search highlight
- Interactive elements

## Data Statistics

- **Modules**: 4
- **Total Questions**: 200+
- **Answered Questions**: ~150
- **Practice Questions**: ~50
- **Topics**: 100+

## Search Functionality

Search works across:
- Question text content
- Question numbers
- Exam tags (e.g., "Exam Q2(a)")
- Course Outcomes (e.g., "CO1")
- Module titles and subtitles

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Optimizations

- Client-side search for instant results
- Memoized filtered results
- Optimized re-renders with React hooks
- Lazy loading of module content
- Efficient CSS with Tailwind

## Future Enhancements

Possible improvements:
- Bookmark/favorite questions
- User progress persistence with localStorage
- Dark/light theme toggle
- PDF export functionality
- Quiz mode with scoring
- Answer sharing and collaboration
- Mobile app version

## Technologies Used

- **Next.js 16** with App Router
- **React 19** with hooks
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vercel** for hosting and deployment

## License

Educational material for learning purposes.

## Support

For issues or questions about the content, please refer to your course materials or instructor.
