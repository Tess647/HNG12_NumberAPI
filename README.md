This task requires you to build a **Number Classification API** that classifies a given number based on mathematical properties and fetches a fun fact from the Numbers API. Here’s how to approach it step by step:

---

### **Step 1: Understanding the Requirements**

- The API should **accept a number as a query parameter** (`/api/classify-number?number=371`).
- It should return a **JSON response** with:
  - **Whether the number is prime**
  - **Whether the number is perfect**
  - **Its mathematical properties (Armstrong, Odd/Even)**
  - **Sum of its digits**
  - **A fun fact from the Numbers API**
- It should handle errors properly.
- It should be deployed publicly.
- The code should be on GitHub.

---

### **Step 2: Choosing the Tech Stack**

Since you're comfortable with **JavaScript (Node.js & Express.js)**, this would be a good choice for quick development and deployment. You'll also need **Axios** or **Node’s Fetch API** to fetch fun facts from the Numbers API.

---

### **Step 3: API Implementation Plan**

1. **Create a new Node.js project**

   - Initialize with `npm init -y`
   - Install necessary dependencies:
     ```bash
     npm install express axios cors
     ```

2. **Set up an Express.js server**

   - Create `server.js`
   - Use `cors` middleware to handle CORS

3. **Implement Number Classification Functions**

   - Check if a number is **prime**.
   - Check if a number is **perfect**.
   - Check if a number is an **Armstrong number**.
   - Determine if the number is **odd or even**.
   - Calculate the **sum of its digits**.

4. **Fetch a Fun Fact**

   - Use `Axios` or `fetch` to get a fun fact from [Numbers API](http://numbersapi.com/#42).

5. **Handle Errors**

   - If the input is not a valid number, return a `400 Bad Request` response.

6. **Deploy the API**

   - Use **Render, Railway, or Vercel** to make the API publicly accessible.

7. **Document the API**
   - Write a `README.md` with:
     - Project description
     - How to use the API
     - Example responses

---

### **Step 4: Code Implementation (Node.js + Express.js)**

### **Step 5: Deploying the API**

#### **Deploy on Render**

1. Push your code to **GitHub**.
2. Go to [Render](https://render.com/), create an account.
3. Click on "New Web Service" → Connect GitHub Repo.
4. Choose **Node.js** environment, and set the **Start Command** as:
   ```bash
   node server.js
   ```
5. Deploy!

---

### **Step 6: Testing & Submitting**

- Test API using **Postman** or browser.
- Ensure correct responses for different inputs.
- Check the deployed API using:
  ```bash
  curl https://your-deployed-url/api/classify-number?number=371
  ```
- Submit your GitHub repo link and deployed API URL.

---

### **Step 7: Writing the README**

Your `README.md` should contain:

- **Project Overview**
- **Tech Stack**
- **API Documentation**
  - **Endpoint:** `GET /api/classify-number?number={num}`
  - **Example Response**
  - **Error Handling**
- **Deployment Details**
- **How to Run Locally**

Example:

````markdown
# Number Classification API

## Overview

This API classifies numbers based on their mathematical properties and fetches a fun fact from the Numbers API.

## Tech Stack

- Node.js
- Express.js
- Axios
- Render/Railway for deployment

## API Endpoint

### GET `/api/classify-number?number={num}`

Returns mathematical properties of a number.

### Example Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
````

### Error Response

```json
{
  "number": "invalid",
  "error": true
}
```

## Deployment

This API is live at:  
[https://hng12-numberapi.onrender.com](https://hng12-numberapi.onrender.com)

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/number-classifier.git
   cd number-classifier
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

```

---

### **Final Steps**
✅ Code it
✅ Test it
✅ Deploy it
✅ Submit it
🔥 Done!

Let me know if you need help with any part! 🚀
```
