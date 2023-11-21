# eortologio-unofficial-api

An unofficial API to fetch Greek name day (eortologio) information, providing functions to retrieve names and detailed celebration information for specific dates, as well as converting names to their associated celebration dates in a standard format.

## Installation

To incorporate `eortologio-unofficial-api` into your project:

```bash
npm install eortologio-unofficial-api
```

## Usage

`eortologio-unofficial-api` offers the following main functions:

- getNames(date): Retrieves the names that are celebrated on a specific date.
- getInfo(date): Retrieves detailed celebration information for a specific date.
- getDateForName(name): Retrieves the celebration date for a given name.
- getFormattedDateForName(name): Retrieves the celebration date for a given name in a numerical format (dd/mm).

## Importing the Package

First, integrate the package into your project:

```javascript
const eortologio = require("eortologio-unofficial-api");
```

### Fetching Names

To obtain names celebrating on a specific date:

```javascript
const date = "5/11/2023"; // Format: 'dd/mm/yyyy'
eortologio
  .getNames(date)
  .then((names) => console.log(`Names celebrating on ${date}:`, names))
  .catch((error) => console.error("Error:", error.message));
```

### Fetching Celebration Information

To obtain celebration information for a specific date:

```javascript
eortologio
  .getInfo(date)
  .then((info) => console.log(`Celebration information for ${date}:`, info))
  .catch((error) => console.error("Error:", error.message));
```

### Fetching Date for a Name

To find out the celebration date for a specific name:

```javascript
const name = "George";
eortologio
  .getDateForName(name)
  .then((date) => console.log(`${name} celebrates on:`, date))
  .catch((error) => console.error("Error:", error.message));
```

### Fetching Formatted Date for a Name

To get the celebration date in a numerical format for a specific name:

```javascript
eortologio
  .getFormattedDateForName(name)
  .then((formattedDate) =>
    console.log(`Formatted celebration date for ${name}:`, formattedDate)
  )
  .catch((error) => console.error("Error:", error.message));
```

## Error Handling

The package throws errors for invalid dates or issues with data fetching/parsing. Ensure the date follows the 'dd/mm/yyyy' format for proper functionality.

## License

This project is under the MIT License.

## Disclaimer

This is an unofficial API not affiliated with official Greek eortologio services. Data is sourced from publicly available information and might not always be accurate or current.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for suggestions or improvements. [Visit my GitHub Profile](https://github.com/Stathkost) 😊
