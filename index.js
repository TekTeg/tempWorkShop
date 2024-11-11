
/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  // TODO
  return ((f - 32) * 5 / 9).toFixed(2)
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) // TODO
{
  if (f < 32) {
    return "very cold!"
  }
  else if (f < 64) {
    return "cold!"
  }
  else if (f < 86) {
    return "warm!"
  }
  else if (f < 100) {
    return "hot!"
  }
  else {
    return "VERY hot!"
  }
}

// /**
//  * @param {number} limit
//  * @returns {number} a random integer in the range [0, `limit`)
//  */
function getRandomInt(limit) {
  // TODO
  const numbToString = String(limit)
  const numberOfDigit = numbToString.length
  const randToInt = Math.round((Math.random() * 10 ** numbToString))
  if (randToInt <= limit) {
    return randToInt
  }
  else {
    return randToInt % limit
  }
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);

parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);


//The below is additional coding

const randFactsData = [`Coldest ever recorded: The coldest temperature ever officially recorded on Earth is -89.2°C (-128.5°F), measured at the Vostok Station in Antarctica.`,
  `Hottest ever recorded: The hottest temperature ever recorded on Earth is 134°F (56.7°C), which occurred in Death Valley, California.`,
  `Celsius vs Fahrenheit: At -40 degrees, both Celsius and Fahrenheit scales read the same temperature.`,
  `Galileo's thermometer: While often credited with inventing the thermometer, Galileo actually developed a "thermoscope" which couldn't measure temperature precisely as it lacked a scale.`,
  `Cricket chirps and temperature: You can estimate the temperature by counting how many times a cricket chirps in a certain time frame.`,
  `Human body temperature: The average human body temperature is considered to be 98.6°F (37°C).`,
  `Absolute zero: "Absolute zero" is the theoretical coldest possible temperature, where all molecular movement stops.`,
  `Siberia's cold: The coldest permanently inhabited places on Earth are located in Siberia.`,
  `Water freezing point: Water freezes at 0°C (32°F).`,
  `Celsius is most common: The Celsius scale is the most widely used temperature measurement system globall`]

function randTempFacts() {
  let response = prompt(`Do you want to know some facts about temprature.\n Answer "Yes" if you agree or "No" if you do not`)
  if (response[0].toLowerCase() === "y") {
    let selector = Math.round(Math.random() * 100)
    if (selector <= 10) {
      alert(randFactsData[selector])
    }
    else { alert(randFactsData[selector % 10]) }
  }
  else {
    alert("bye!")
  }
}
randTempFacts()
//This code converts temperatures between Fahrenheit and Celsius.
function convertTemp() {
  let convChoice=(prompt("I can convert temperatures between Fahrenheit (°F) and Celsius (°C). Which conversion would you like? Please enter 1 or 2 to select your choice. \n1. Convert from Fahrenheit to Celsius \n2. Convert from Celsius to Fahrenheit"))
  if (convChoice ==="1"){
  let getFahrenheit=Number(prompt("What is the temprature in Fahrenheit"))
  let getCentigrade=(getFahrenheit-32)*5/9
  if (getCentigrade===NaN){ 
    alert (getFahrenheit+ "is not a number")
  }
  alert(getFahrenheit+ "°F is " + getCentigrade.toFixed(2)+"°C")
    }
    else if (convChoice ==="2"){
      let getCentigrade=Number(prompt("What is the temprature in Celsius"))
      let getFahrenheit=(getCentigrade*9/5)+32
      alert(getCentigrade+ "°C is " + getFahrenheit.toFixed(2) +"°F")
    }
  
  else{
    alert(convChoice + " is not part of the option. Please refresh and try again.")
  }
  }
  convertTemp()