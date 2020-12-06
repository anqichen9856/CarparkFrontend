# Carpark Availability Checking System - Frontend

## Introduction

This is the frontend for a carpark availability checking system. It needs to be used together with a backend API (see Instructions for Setting Up below).

The frontend contains 3 screens:
1. Registration: Users must register an account in order to use the system. 
2. Login: Users must be authenticated before querying the carpark availability API.
3. Carpark Availability: Displays information about the current user, and carpark availability (obtained from https://data.gov.sg/dataset/carpark-availability) in a table according to user's query.

This project is built with AngularJS.

## Instructions for Setting Up

1. Set up the backend carpark API and get it running, by following instructions at https://github.com/anqichen9856/CarparkApi
2. Download this frontend project in Zip and decompress it
3. Open your terminal, go to the project root directory
4. In the terminal, type the following two commands:
    ```
    sudo npm install http-server -g
    http-server
    ```
    If `npm` command is not found, install Node.js at https://nodejs.org/en/download/
5. Open your browser (Chrome preferred) and go to the IP and port on which your server has started 
6. You can now try out the carpark availability system

Note: If you encounter any problems while using the system, try restarting your browser and enter incognito mode.

If you have any suggestions or feedback, please feel free to contact me at anqichen@u.nus.edu.


