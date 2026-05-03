# S-VYASA Faculty Dashboard - Project Guide

## 📋 Project Overview
S-VYASA is a comprehensive faculty management dashboard built with React, Vite, and Tailwind CSS. It helps faculty members manage attendance, lesson plans, timetables, events, and student mentoring.

## 🗂️ Project Structure

```
svyasa/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx              # Left navigation menu
│   │   ├── Topbar.jsx               # Top header bar
│   │   ├── Dashboard/               # Dashboard home page
│   │   ├── Attendance/              # Attendance tracking & reporting
│   │   ├── LessonPlan/              # Lesson plan creation & export
│   │   ├── Timetable/               # Class timetable management
│   │   ├── Event_s/                 # Event management
│   │   ├── Mentoring/               # Student mentoring system
│   │   └── MyProfile/               # Faculty profile
│   ├── pages/
│   │   ├── LoginPage.jsx            # Login/Authentication
│   │   ├── AttendancePage.jsx
│   │   ├── StudentRecordPage.jsx
│   │   └── ConductedEventsPage.jsx
│   ├── context/
│   │   └── EventsContext.jsx        # React Context for Events
│   ├── assets/                      # Images & static files
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind CSS imports
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── index.html                       # HTML entry
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   Note: `--legacy-peer-deps` is used due to CKEditor's dependency requirements.

2. **Set up environment (optional):**
   ```bash
   cp .env.example .env
   # Edit .env with your API endpoints
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   App will open at `http://localhost:5173`

### Build for Production

```bash
npm run build      # Creates optimized dist/ folder
npm run preview    # Preview production build locally
```

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI library |
| React DOM | 18.3.1 | React rendering |
| Vite | 6.0 | Build tool & dev server |
| Tailwind CSS | 4.0 | Styling framework |
| CKEditor 5 | 41.4.2 | Rich text editor |
| date-fns | 4.1.0 | Date manipulation |
| xlsx | 0.18.5 | Excel export |
| docx | 9.6.1 | Word document generation |
| react-datepicker | 9.1.0 | Date picker component |
| Phosphor Icons | 2.1.7 | Icon library |

## 🔧 Features

### ✅ Implemented
- **Authentication** - Login with localStorage persistence
- **Dashboard** - Statistics & overview
- **Attendance** - Track & generate reports
- **Lesson Plans** - Create & export as DOCX files
- **Timetable** - Class schedule, assessments, class transfers
- **Events** - Manage and view events
- **Mentoring** - Student mentoring interface with bot widget
- **Profile** - Faculty profile management
- **Data Export** - Excel & Word document generation
- **Responsive Design** - Mobile-friendly UI

### 📝 To Do / Improvements

- [ ] Backend API integration
- [ ] User authentication service
- [ ] Database setup (MongoDB/PostgreSQL)
- [ ] Error handling & error boundaries
- [ ] Loading states & skeletons
- [ ] Toast notifications
- [ ] Unit & integration tests
- [ ] E2E testing
- [ ] Code splitting & lazy loading
- [ ] State management (Redux/Zustand if needed)
- [ ] TypeScript migration
- [ ] ESLint & Prettier setup
- [ ] CI/CD pipeline

## 🎨 Styling

The project uses **Tailwind CSS v4** for styling. All styles are utility-based and responsive.

**Key design features:**
- Dark sidebar navigation
- Top bar with search & notifications
- Card-based layouts
- Responsive grid system
- Custom color scheme (index.css defines theme)

## 🔐 Authentication

- Login credentials stored in `localStorage` with key: `svyasa.auth.v1`
- Lesson plans persisted in `localStorage` with key: `svyasa.lessonPlans.v2`
- Protected routes check auth state in `App.jsx`

## 📚 Components Usage

### Adding a New Page/Component

1. Create component in appropriate folder
2. Import in `App.jsx`
3. Add navigation link in `Sidebar.jsx`
4. Update routing logic in `App.jsx`

### Creating a New Feature Module

1. Create folder under `src/components/FeatureName/`
2. Create main component: `FeatureName.jsx`
3. Create sub-components as needed
4. Create context if needed in `src/context/`

## ⚙️ Environment Variables

Create `.env` file based on `.env.example`:

```
VITE_API_BASE_URL=http://your-api-endpoint
VITE_APP_NAME=S-VYASA Faculty Dashboard
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

## 🐛 Known Issues

### Windows Path Length
CKEditor dependencies may show TAR_ENTRY_ERROR warnings on Windows due to path length limits. This is not fatal and doesn't affect functionality.

### Browser Storage
localStorage has ~5-10MB limit. For large data, consider backend API.

## 📞 Support

For issues or questions, check:
1. Component documentation in comments
2. React DevTools for state inspection
3. Browser DevTools console for errors
4. Vite documentation: https://vitejs.dev

## 🎯 Next Steps

1. Set up backend API
2. Connect authentication to real service
3. Implement data persistence
4. Add error handling
5. Set up testing
6. Deploy to production

---

**Last Updated:** May 2026
**Status:** In Development
