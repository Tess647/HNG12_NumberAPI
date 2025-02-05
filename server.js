const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is perfect
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num && num !== 0;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );
  return sum === num;
};

// Function to classify the number
const classifyNumber = async (num) => {
  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  let properties = [];
  if (armstrong) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  // Fetch fun fact from Numbers API
  const funFactResponse = await axios.get(
    `http://numbersapi.com/${num}/math?json`
  );
  const funFact = funFactResponse.data.text;

  return {
    number: num,
    is_prime: prime,
    is_perfect: perfect,
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  };
};

// API Endpoint
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(Number(number))) {
    return res.status(400).json({ number, error: true });
  }

  const num = Number(number);
  try {
    const result = await classifyNumber(num);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
