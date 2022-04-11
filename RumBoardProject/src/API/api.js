import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {LIVEURL, APITOKEN} from "@env"

/* switch this for testing on staging or production */
export const staging = false;

const { Pool, Client } = require("pg");

const credentials = {
  user: "psql",
  host: "localhost",
  database: "rumboarddatabase",
  password: "",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();

/*
async function registerUser(user_id) {
  const text = `
    INSERT INTO account (Name, gender, phone, age)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;
  const values = [person.fullname, person.gender, person.phone, person.age];
  return pool.query(text, values);
}

async function getUser(user_id) {
  const text = `SELECT * FROM account WHERE id = $1`;
  const values = [user_id];
  return pool.query(text, values);
}

async function updateUserName(user_id, fullname) {
  const text = `UPDATE account SET Name = $2 WHERE id = $1`;
  const values = [account, fullname];
  return pool.query(text, values);
}

async function removeUser(user_id) {
  const text = `DELETE FROM account WHERE id = $1`;
  const values = [user_id];
  return pool.query(text, values);
}*/