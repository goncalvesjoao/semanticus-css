# Semanticus CSS Brand Assets

## SVG Logo Files

Two SVG files have been created:
- `semanticus-icon.svg` - Icon only (curly braces + stacked layers)
- `semanticus-logo.svg` - Full logo with text

---

## Color Schema

### Primary Colors (Warm Gradient)
| Color Name | HEX Code | Usage |
|------------|----------|-------|
| **Top Layer** | `#E85A2B` | Primary accent, top of icon |
| **Top-Mid Blend** | `#F27036` | Gradient transition |
| **Middle Layer** | `#F7931E` | Secondary accent |
| **Mid-Bottom Blend** | `#F9A836` | Gradient transition |
| **Bottom Layer** | `#F9C846` | Highlights, bottom of icon |

### Secondary Colors
| Color Name | HEX Code | Usage |
|------------|----------|-------|
| **Text/Dark** | `#3D4045` | Text, braces, dark elements |
| **Dark Alt** | `#2C2F33` | Deep backgrounds |

### CSS Variables
```css
:root {
  /* Primary gradient colors */
  --semanticus-red-orange: #E85A2B;
  --semanticus-orange: #F27036;
  --semanticus-light-orange: #F7931E;
  --semanticus-yellow-orange: #F9C846;
  
  /* Neutral colors */
  --semanticus-dark: #3D4045;
  --semanticus-dark-deep: #2C2F33;
  --semanticus-white: #FFFFFF;
  --semanticus-light-gray: #F5F5F5;
}
```

### Gradient Definitions
```css
.semanticus-gradient-top {
  background: linear-gradient(135deg, #E85A2B 0%, #F27036 100%);
}

.semanticus-gradient-middle {
  background: linear-gradient(135deg, #F27036 0%, #F7931E 100%);
}

.semanticus-gradient-bottom {
  background: linear-gradient(135deg, #F7931E 0%, #F9C846 100%);
}

.semanticus-gradient-full {
  background: linear-gradient(180deg, #E85A2B 0%, #F27036 33%, #F7931E 66%, #F9C846 100%);
}
```

---

## Font Recommendations

The "Semanticus CSS" text uses a **geometric sans-serif** font style. Here are the best HTML/CSS font options:

### Web-Safe & Google Fonts (Recommended)

| Font Family | Weight | Similarity | CSS Import |
|-------------|--------|------------|------------|
| **Montserrat** | 700 (Bold) | ⭐⭐⭐⭐⭐ Best match | `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');` |
| **Poppins** | 700 (Bold) | ⭐⭐⭐⭐⭐ Excellent | `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');` |
| **Nunito** | 700 (Bold) | ⭐⭐⭐⭐ Very good | `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');` |
| **Quicksand** | 700 (Bold) | ⭐⭐⭐⭐ Good | `@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');` |

### System Font Fallbacks
```css
font-family: 'Montserrat', 'Poppins', 'Nunito', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

### Recommended Implementation
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
  
  <style>
    .semanticus-text {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 42px;
      color: #3D4045;
      letter-spacing: -0.5px;
    }
  </style>
</head>
<body>
  <span class="semanticus-text">Semanticus CSS</span>
</body>
</html>
```

---

## Icon Usage

### Icon Only (for favicon, small icons)
```html
<img src="semanticus-icon.svg" alt="Semanticus CSS" width="32" height="32">
```

### Full Logo
```html
<img src="semanticus-logo.svg" alt="Semanticus CSS Logo" width="200" height="240">
```

---

## Notes

- The icon represents **stacked layers** (suggesting technology/stack) within **curly braces** (representing code/programming)
- The warm gradient (red-orange → yellow) conveys energy, creativity, and innovation
- The geometric font choice reinforces the tech/modern aesthetic
