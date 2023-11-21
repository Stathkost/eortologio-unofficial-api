// eortologio.js

const axios = require("axios");
const cheerio = require("cheerio");

function isValidDate(dateString) {
  const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return regex.test(dateString);
}

async function fetchData(date) {
  if (!isValidDate(date)) {
    throw new Error('Invalid date format. Please use "dd/mm/yyyy".');
  }

  const url = `https://www.ethnos.gr/tag/50/eortologio?cd=${date}`;
  const response = await axios.get(url);
  return cheerio.load(response.data);
}

const getNames = async (date) => {
  try {
    const $ = await fetchData(date);
    const dataWrapper = $(".exo-content-wrap .nameswrapper");

    if (
      dataWrapper.find(".celeb-title").length &&
      dataWrapper
        .find(".celeb-title")
        .text()
        .includes("Δεν υπάρχει επίσημη εορτή")
    ) {
      return "No official celebration for this date.";
    }

    let data = dataWrapper.text().trim();
    const parts = data.split("και γιορτάζουν οι");
    return parts[1]
      .trim()
      .split(",")
      .map((name) => name.trim())
      .join(", ");
  } catch (error) {
    throw error;
  }
};

const getInfo = async (date) => {
  try {
    const $ = await fetchData(date);
    const dataWrapper = $(".exo-content-wrap .nameswrapper");

    if (
      dataWrapper.find(".celeb-title").length &&
      dataWrapper
        .find(".celeb-title")
        .text()
        .includes("Δεν υπάρχει επίσημη εορτή")
    ) {
      return "No official celebration for this date.";
    }

    let data = dataWrapper.text().trim();
    const parts = data.split("και γιορτάζουν οι");
    return parts[0].trim();
  } catch (error) {
    throw error;
  }
};

async function getDateForName(name) {
  try {
    // Encode the name for the URL
    const encodedName = encodeURIComponent(name);

    // Make a request to the API
    const response = await axios.get(
      `https://www.eortologio.net/pote_giortazei/${encodedName}`
    );

    // Load the HTML content using cheerio
    const $ = cheerio.load(response.data);

    // Find the date element and extract the text
    const date = $(".table td b a").text();

    if (date) {
      return date.trim();
    } else {
      throw new Error("Name not found in the API");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "Name not found in the API";
    } else {
      throw error; // Re-throw other errors
    }
  }
}

async function getFormattedDateForName(name) {
  try {
    // Get the date string from the existing function
    const dateString = await getDateForName(name);

    // Map of Greek month names to their numerical values
    const months = {
      Ιανουαρίου: "01",
      Φεβρουαρίου: "02",
      Μαρτίου: "03",
      Απριλίου: "04",
      Μαΐου: "05",
      Ιουνίου: "06",
      Ιουλίου: "07",
      Αυγούστου: "08",
      Σεπτεμβρίου: "09",
      Οκτωβρίου: "10",
      Νοεμβρίου: "11",
      Δεκεμβρίου: "12",
    };

    // Split the date string into day, month, and year
    const parts = dateString.split(" ");
    const day = parts[0];
    const month = parts[1];

    // Replace the Greek month with its numerical equivalent
    const formattedDate = `${months[month]}-${day}`;

    return formattedDate;
  } catch (error) {
    throw error; // Re-throw the error
  }
}

module.exports = {
  getNames,
  getInfo,
  getDateForName,
  getFormattedDateForName,
};
