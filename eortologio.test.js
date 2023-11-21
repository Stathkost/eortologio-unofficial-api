const {
  getNames,
  getInfo,
  getDateForName,
  getFormattedDateForName,
} = require("./eortologio");

// Test for getNames
async function testGetNames() {
  try {
    const date = "01/01/2023"; // Change to a known date
    const names = await getNames(date);
    console.log(`Test getNames for ${date}:`, names);
  } catch (error) {
    console.error("Error in testGetNames:", error);
  }
}

// Test for getInfo
async function testGetInfo() {
  try {
    const date = "01/01/2023"; // Change to a known date
    const info = await getInfo(date);
    console.log(`Test getInfo for ${date}:`, info);
  } catch (error) {
    console.error("Error in testGetInfo:", error);
  }
}

// Test for getDateForName
async function testGetDateForName() {
  try {
    const name = "George"; // Change to a known name
    const date = await getDateForName(name);
    console.log(`Test getDateForName for ${name}:`, date);
  } catch (error) {
    console.error("Error in testGetDateForName:", error);
  }
}

// Test for getFormattedDateForName
async function testGetFormattedDateForName() {
  try {
    const name = "George"; // Change to a known name
    const formattedDate = await getFormattedDateForName(name);
    console.log(`Test getFormattedDateForName for ${name}:`, formattedDate);
  } catch (error) {
    console.error("Error in testGetFormattedDateForName:", error);
  }
}

// Run all tests
async function runTests() {
  await testGetNames();
  await testGetInfo();
  await testGetDateForName();
  await testGetFormattedDateForName();
}

runTests();
