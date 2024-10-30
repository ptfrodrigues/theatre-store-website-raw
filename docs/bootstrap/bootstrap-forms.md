
# Bootstrap Form Utilities

## Form Control Sizing

Bootstrap offers classes to adjust the sizing of form controls, such as input fields and selects.

| Class               | Description                                     |
|---------------------|-------------------------------------------------|
| `.form-control-lg`  | Large input size (increased padding and font size) |
| `.form-control`     | Default input size                              |
| `.form-control-sm`  | Small input size                                |

---

## Form Layouts

Form layouts in Bootstrap help in structuring form elements. Choose between `.form-group` for vertical layouts and grid options for horizontal layouts.

| Class                | Description                              |
|----------------------|------------------------------------------|
| `.form-group`        | Creates a vertical form group            |
| `.form-row`          | Uses a row layout for form controls      |
| `.col-*`             | Grid-based form control layout           |
| `.form-inline`       | Inline form layout                       |

---

## Text and Background Colours

Bootstrap provides text and background colour classes to style form elements.

| Class                 | Description                                  |
|-----------------------|----------------------------------------------|
| `.text-primary`       | Primary theme colour for text               |
| `.bg-light`           | Light background for form controls          |
| `.bg-secondary`       | Secondary background for form elements      |
| `.text-muted`         | Muted text for less emphasis                |

---

## Input Group Addons

Add-ons enhance input fields with text or icons.

| Class                | Description                                         |
|----------------------|-----------------------------------------------------|
| `.input-group`       | Wrapper for input group elements                    |
| `.input-group-prepend` | Adds content before input (e.g., icon, text)      |
| `.input-group-append` | Adds content after input (e.g., button, icon)      |
| `.input-group-text`  | Styles content within input group                   |

---

## Form Control States

Control states like disabled or read-only using these classes.

| Class               | Description                              |
|---------------------|------------------------------------------|
| `.disabled`         | Disables a form element                 |
| `.readonly`         | Sets an element to read-only            |
| `.is-valid`         | Styles an element as valid              |
| `.is-invalid`       | Styles an element as invalid            |

---

## Validation Feedback

These classes are used for validation feedback on form controls.

| Class               | Description                              |
|---------------------|------------------------------------------|
| `.valid-feedback`   | Displays valid feedback message         |
| `.invalid-feedback` | Displays invalid feedback message       |
| `.was-validated`    | Triggers validation styling             |

---

## Form Check

Form checks style checkboxes and radio buttons.

| Class               | Description                              |
|---------------------|------------------------------------------|
| `.form-check`       | Wrapper for checkboxes/radio buttons    |
| `.form-check-input` | Styles the input element                |
| `.form-check-label` | Styles the label                        |
| `.form-switch`      | Converts checkbox to toggle switch      |

---

## Floating Labels

Use floating labels for more compact forms.

| Class               | Description                              |
|---------------------|------------------------------------------|
| `.form-floating`    | Wrapper that enables floating labels    |
| `.form-label`       | Styles the form label                   |
| `.form-control`     | Styles the form input (required)        |

Example:

```html
<div class="form-floating">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
```

---

## Form Spacing Utilities

Use spacing classes to control the layout of form elements.

| Class                | Description                               |
|----------------------|-------------------------------------------|
| `.mb-3`              | Adds bottom margin to form group         |
| `.mx-auto`           | Centers form horizontally                |
| `.mt-2`              | Adds top margin to form control          |

---

## Responsive Layouts

Combine form layout classes with responsive utilities to create adaptive forms.

```html
<div class="form-row">
  <div class="col-md-6 mb-3">
    <input type="text" class="form-control" placeholder="First name">
  </div>
  <div class="col-md-6 mb-3">
    <input type="text" class="form-control" placeholder="Last name">
  </div>
</div>
```

---

## Real-Life Example

A basic sign-up form with Bootstrap utilities:

```html
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustomEmail">Email</label>
    <input type="email" class="form-control" id="validationCustomEmail" placeholder="you@example.com" required>
    <div class="invalid-feedback">Please provide a valid email.</div>
  </div>
  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="termsCheck" required>
    <label class="form-check-label" for="termsCheck">Agree to terms and conditions</label>
    <div class="invalid-feedback">You must agree before submitting.</div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
```

---

This structure provides a comprehensive overview of Bootstrap’s form utilities and a practical example of using them in a real-world form scenario.