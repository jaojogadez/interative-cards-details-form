# Interactive Cards Details Form

This project creates an interactive form for collecting payment card details and personal information.  The form features real-time validation and visual feedback, providing a user-friendly experience.  Upon successful submission, the data is sent to a SheetMonkey API endpoint.

## Features and Functionality

* **Interactive Card Display:**  The form dynamically updates a visual representation of the credit card as the user inputs data (index.html, `#card-container`).
* **Real-time Validation:** Input fields are validated using the `validate.js` library (script.js, `rules` object) and provide immediate feedback to the user.
* **Input Formatting:**  Phone number, CPF, and CEP fields are automatically formatted as the user types (script.js, `onlyNumbers`, `onlyLetters`).
* **Discount Coupon:**  Users can apply a discount coupon ("vaiCorinthians10") which adjusts the displayed price (script.js, `desconto`). A timer limits the discount application window (script.js, `atualizarTempo`).
* **Form Submission:**  Upon successful validation, the form data is submitted to a SheetMonkey API for processing (script.js, fetch call to "https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g").
* **Error Handling:**  Displays error messages using Bootstrap's toast functionality (index.html, `#liveToast`).
* **Responsive Design:** Utilizes Bootstrap 5 for responsive layout.


## Technology Stack

* **HTML:** index.html
* **CSS:** Bootstrap 5, custom CSS (css/style.css)
* **JavaScript:**  Vanilla JavaScript with `validate.js` library for form validation, and Bootstrap for UI components.
* **API:** SheetMonkey API (https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g)


## Prerequisites

* A web browser (Chrome, Firefox, Safari, etc.)
* Node.js (optional, for local development if you choose to expand the project)
* Basic understanding of HTML, CSS, and JavaScript.

## Installation Instructions

1. Clone the repository: `git clone https://github.com/jaojogadez/interative-cards-details-form.git`
2. Navigate to the project directory: `cd interative-cards-details-form`
3. Open `index.html` in your web browser.

## Usage Guide

1. Fill in the personal information fields.  Real-time validation will indicate if the format is correct.
2. Fill in the credit card details.  The card preview will update as you type.
3. Optionally, enter the discount coupon "vaiCorinthians10" before the timer expires.
4. Click "Confirmar" to submit the form.  Successful submissions redirect to a confirmation screen.

## API Documentation

The project utilizes the SheetMonkey API at: https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g. Refer to the SheetMonkey API documentation for details on request parameters and responses.  The form sends a JSON payload containing all input fields.

## Contributing Guidelines

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your branch to your forked repository.
5. Create a pull request to merge your changes into the main repository.


## License Information

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact/Support Information

For any questions or issues, please contact [jaojogadez] directly through GitHub.
