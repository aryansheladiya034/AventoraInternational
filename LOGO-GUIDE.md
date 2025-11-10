# Logo Usage Guide

## Logo Files Location

The Aventora International logo is stored in the following locations:

### Public Folder (`/public/`)
- `aventora-logo.png` - Main logo file (PNG format)
- `favicon.ico` - Favicon for browser tabs (copied from main logo)

### Components (`/src/components/`)
- `Logo.tsx` - Reusable Logo component

## Logo Component Usage

The `Logo` component is the recommended way to use the Aventora International logo throughout the application.

### Import
```tsx
import Logo from './components/Logo';
// or
import { Logo } from './components';
```

### Basic Usage
```tsx
<Logo />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `''` | Additional CSS classes |
| `size` | `'small'` \| `'medium'` \| `'large'` | `'medium'` | Predefined size options |
| `variant` | `'default'` \| `'white'` | `'default'` | Color variant for different backgrounds |

### Size Options
- `small` - h-6 w-auto (for footer, small spaces)
- `medium` - h-12 w-auto (for header, default)
- `large` - h-16 w-auto (for hero sections, large displays)

### Examples

```tsx
// Header logo (default)
<Logo />

// Footer logo (small, white variant)
<Logo size="small" variant="white" />

// Hero section logo (large)
<Logo size="large" />

// Custom styling
<Logo className="mx-auto mb-4" size="large" />
```

## Current Usage in Application

### Layout Component
The logo is used in two places within the Layout component:

1. **Header Navigation**: Medium size, default variant
2. **Footer**: Small size, white variant (inverted for dark background)

### Files Updated
- `src/components/Layout.tsx` - Updated to use Logo component
- `src/components/Logo.tsx` - New reusable component
- `src/components/index.ts` - Export definitions
- `index.html` - Updated favicon references
- `public/` - Logo files organized

## Best Practices

1. **Always use the Logo component** instead of direct img tags for consistency
2. **Use appropriate sizes** based on context (small for footer, medium for header, large for hero)
3. **Use white variant** on dark backgrounds
4. **Maintain aspect ratio** - the component handles this automatically
5. **Test logo visibility** on different background colors

## Troubleshooting

### Logo not displaying
- Check that `aventora-logo.png` exists in `/public/` folder
- Verify the file path in Logo component is correct
- Ensure the development server is running

### Logo too small/large
- Use the `size` prop instead of custom CSS when possible
- For custom sizes, use the `className` prop with Tailwind classes

### Logo not visible on colored backgrounds
- Use `variant="white"` for dark backgrounds
- Test logo visibility across different page sections

## File Structure
```
/public/
  ├── aventora-logo.png     # Main logo file
  └── favicon.ico           # Browser favicon

/src/components/
  ├── Logo.tsx              # Reusable Logo component
  ├── Layout.tsx            # Updated to use Logo component
  └── index.ts              # Component exports
```