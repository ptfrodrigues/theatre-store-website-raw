# What's New in Bootstrap 5

## 1. Removal of jQuery Dependency

Bootstrap 5 no longer requires jQuery, reducing the framework's dependency and improving load times by relying solely on native JavaScript. This change leads to a leaner, faster Bootstrap.

Example:

```html
<!-- Bootstrap components now work directly with native JavaScript -->
<button type="button" class="btn btn-primary" onclick="toggleModal()">Open Modal</button>
<script>
  function toggleModal() {
    // Custom JavaScript functionality
  }
</script>
```

---

## 2. Improved Grid System

The grid system in Bootstrap 5 has been upgraded with more responsive control and alignment options, making it easier to create fluid, adaptive layouts.

| Feature                  | Description                                        |
|--------------------------|----------------------------------------------------|
| Horizontal alignment     | New classes allow better control over item alignment |
| Column nesting           | Enhanced nesting support for complex layouts       |
| Advanced positioning     | More control for responsive designs                |

Example:

```html
<div class="container">
    <div class="row justify-content-center align-items-start">
        <div class="col-md-4">Column 1</div>
        <div class="col-md-4">Column 2</div>
    </div>
</div>
```

---

## 3. Expanded Utility Classes

Bootstrap 5 introduces a wider array of utility classes for quick styling without custom CSS, including classes for padding, margin, text alignment, and more.

Example:

```html
<div class="p-3 m-3 text-center text-lg-start bg-light">
    Responsive text and padding utilities make styling easier.
</div>
```

---

## 4. Enhanced Colour Mode Support

New color mode support makes it simpler to implement light and dark themes. Automatic imports ensure consistent styling across modes.

Example:

```html
<div class="text-bg-primary p-3">
    Text with a color mode-compatible background.
</div>
```

---

## 5. Accessibility Enhancements

Bootstrap 5 prioritises accessibility by adding better keyboard navigation and improved ARIA attributes. This ensures web applications are more inclusive.

| Feature                | Description                               |
|------------------------|-------------------------------------------|
| Keyboard navigation    | Enhanced focus management                 |
| ARIA improvements      | Improved screen reader compatibility      |

Example:

```html
<!-- Buttons with ARIA support -->
<button aria-label="Close" class="btn btn-outline-secondary">Close</button>
```

---

## 6. CSS Custom Properties

Bootstrap 5 utilises CSS variables, making it easier to theme your application by adjusting colours, fonts, and spacing.

Example:

```css
:root {
    --bs-primary: #0d6efd;
}
```

---

## 7. New Components & Documentation

Bootstrap 5 includes updated components (like improved accordions, modals, and tooltips) and revised documentation with enhanced explanations and examples.

Example:

```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">Content for item #1</div>
        </div>
    </div>
</div>
```

---

These new features in Bootstrap 5 streamline the development of modern, responsive, and accessible websites, making it a versatile choice for front-end development.
