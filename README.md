# developing-a-password-generator

developing a password generator for challenge 3

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Actual Behaviour

```
WHEN 'Generate Password' is clicked a prompt will appear,
GIVEN a user inputs a number between 8 and 128
THEN they will be asked to confirm if they want to include uppercase, lowercase, numbers and special characters
IF no number is entered in the prompt OR every confirm thereafter is 'cancelled' they will be alerted to choose a value
WHEN the user confirms the length and characters for their password
THEN a randomly generated password will appear within the text box
```

![passwordgen](https://user-images.githubusercontent.com/122907573/219322640-2b0ae06f-9226-4630-8e90-e44e0ee0592b.png)

[Link to deployed website](https://faithscoding.github.io/developing-a-password-generator/)
