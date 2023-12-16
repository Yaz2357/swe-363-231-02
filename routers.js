const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/index.html'));
  });
  
router.get('/dark_theme', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/dark_theme.css'));
  });
 
  router.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/script.js'));
  });

  router.get('/E-books', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/E-books.png'));
  });

router.get('/mini-games', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/mini-games.html'));
  });

router.get('/Confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/Confirmation.html'));
  });

router.get('/ContactUs', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/ContactUs.html'));
  });

router.get('/HireMe', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/HireMe.html'));
  });

router.get('/Index-ar', (req, res) => {
    res.sendFile(path.join(__dirname, '../swe-363-231-02/Index-ar.html'));
  });

  router.post('/form', (req, res) => {
    const formData = req.body;
    console.log("Form Data: ", formData);
    res.sendFile(path.join(__dirname, '../swe-363-231-02/Confirmation.html'));
  });

  module.exports = router;