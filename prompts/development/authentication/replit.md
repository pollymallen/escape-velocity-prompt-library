# Replit Authentication Integration

## Prompt

Add user authentication and account management to this project using Replit Auth and its built-in database WITHOUT changing the existing UI flow or user experience.

CONTEXT:
- The UI and user flow are already implemented and working perfectly
- DO NOT modify existing UI components, layouts, or navigation flow
- Authentication should be transparently added as a layer beneath the current interface
- Use Replit Auth's built-in user storage instead of external databases

CRITICAL CONSTRAINT:
- PRESERVE all existing UI/UX exactly as is
- Only add authentication logic behind the scenes
- The user journey through the app should remain identical, just with auth checks added
- Do not redesign, restructure, or "improve" any existing interfaces

SUCCESS CRITERIA:
- Users can sign in using Replit Auth
- User data is stored and retrieved from Replit's built-in systems
- User sessions persist until explicit logout
- Protected routes redirect unauthenticated users
- User-specific data is properly isolated in Replit DB
- All auth operations have proper error handling
- THE EXISTING UI REMAINS COMPLETELY UNCHANGED
- Current user flow and experience are preserved exactly

Please implement this incrementally, testing each component before moving to the next. If any change would require modifying the existing UI, stop and ask for clarification first.
