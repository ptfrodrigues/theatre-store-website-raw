# Bootstrap Width and Height Utilities

## 1. Width Utilities (`w-*`)

Bootstrap includes width utilities that allow you to set fixed, maximum, minimum, and responsive widths.

### Fixed Widths
- **`w-25`**: Sets width to 25% of the parent container.
- **`w-50`**: Sets width to 50% of the parent container.
- **`w-75`**: Sets width to 75% of the parent container.
- **`w-100`**: Sets width to 100% of the parent container.

Example:

```html
<div class="w-50">50% Width</div>
```

### Max Width (`max-w-*`)
- **`max-w-100`**: Constrains the width of an element to 100% of its container.

Example:

```html
<img src="image.jpg" class="max-w-100" alt="Responsive image">
```

### Min Width (`min-w-*`)
- **`min-w-100`**: Ensures an element’s minimum width is 100% of its container.

Example:

```html
<div class="min-w-100">Content with a minimum width of 100%</div>
```

### Responsive Widths
Responsive width classes allow you to control widths at different breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`).

- Responsive width classes: `.w-sm-*`, `.w-md-*`, `.w-lg-*`, etc.
  - `.w-sm-50`: 50% width on small screens (576px and up).
  - `.w-md-25`: 25% width on medium screens (768px and up).

Example:

```html
<div class="w-100 w-md-75 w-lg-50">Responsive width based on screen size</div>
```

---

## 2. Height Utilities (`h-*`)

Bootstrap also provides height utilities for setting fixed, maximum, minimum, and responsive heights on elements.

### Fixed Heights
- **`h-25`**: Sets height to 25% of the parent container.
- **`h-50`**: Sets height to 50% of the parent container.
- **`h-75`**: Sets height to 75% of the parent container.
- **`h-100`**: Sets height to 100% of the parent container.

Example:

```html
<div class="h-50">This div has 50% of its container's height</div>
```

### Max Height (`max-h-*`)
- **`max-h-100`**: Limits an element’s height to 100% of its container.

Example:

```html
<div class="max-h-100 overflow-auto">Max height with overflow scroll</div>
```

### Min Height (`min-h-*`)
- **`min-h-100`**: Sets the minimum height to 100% of the container.

Example:

```html
<div class="min-h-100">Minimum height of 100% of its container</div>
```

### Responsive Heights
Responsive height classes adjust heights at different breakpoints using `.h-sm-*`, `.h-md-*`, `.h-lg-*`, etc.

- Responsive height examples:
  - `.h-sm-50`: 50% height on small screens (576px and up).
  - `.h-md-25`: 25% height on medium screens (768px and up).

Example:

```html
<div class="h-100 h-md-75 h-lg-50">Responsive height based on screen size</div>
```

---

Bootstrap’s width and height utilities provide a quick and flexible way to manage dimensions across various devices and screen sizes, making it easy to create responsive layouts.