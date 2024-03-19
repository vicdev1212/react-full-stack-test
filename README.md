<div align="center">
  <p>
    <img src="assets/logo_bcw.png" width="250" />
  </p>
</div>

# Take Home Test (Full Stack)

## Overview

This is a take-home test for candidates applying for a full-stack developer
position at BCW Technologies. It contains three sections: "Frontend" and "Backend" which
together include a series of tests involving React, Typescript, and Node.js.

Feel free to solve these questions however you see fit, using whatever coding
style or third-party libraries you think are appropriate.

To start the test, simply clone this repo and make your edits locally. Once you are done, please push your changes to this repo and create a pull request.

NOTE: We expect more than one commit in the PR, do not spend time overthinking the commit messages or squashing your commits together.

1. Fetch and display the list of cryptocurrencies available from CoinStats (see endpoint below).
2. **Create a responsive layout** that will display these currencies and their respective image, URLs, and data.
3. Add a dropdown menu to fetch the list in one of the following currencies: HKD, KRW, SGD, and USD.
4. Add a button to sort the list of currencies by the rank of the currencies.
5. Add a button to sort the list of currencies by alphabetical order using the name of the currencies.
6. Add a field to display the exchange a user should use to minimize the amount of a _selected currency_ they would need to spend on a trade 

    6a. _selected currency_ is the currency the user has selected in #3.

    6b. The correct exchange(s) should be returned by the backend server you are tasked to create below.

### Tips

- Please make the app be served on port `:3000`.

- **Please use React-Typescript for this task**, but feel free to structure the code however you prefer and use any other third-party libraries at your discretion. 

- Do not spend too much time making it beautiful. Basic aesthetics are expected, please try to balance your time between function and aesthetics.

### API Information

- **CoinStats Public API `GET /public/v1/coins` endpoint:** 

    - https://dev-brand.api.vaultik.com/

- **Parameters:**

    - `currency`: `string` - one of `HKD`, `KRW`, `SGD`, and `USD`.

- **Example:**

    - `curl --location --request GET 'https://dev-brand.api.vaultik.com/product?pubKey=75cfc28c-e623-4cc4-a8bb-b6a27724aa3a'`

## Submitting Your Code

Once you've completed the test, please send a pull request to the same repository.

**Do not include node_modules or .git in your submission.**

We will then review it and get back to you as soon as possible.

Thanks!
