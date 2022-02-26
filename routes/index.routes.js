const router = require("express").Router();

router.get("/iframe", (req, res, next) => {
  res.render("iframe");
});

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/principal", (req, res, next) => {
  res.render("home");
});

router.get("/proximo-partido", (req, res, next) => {
  res.render("next-match");
});

router.get("/informacion-deportiva", (req, res, next) => {
  res.render("sport-information");
});

router.get("/general", (req, res, next) => {
  res.render("general")
})

router.get("/informacion-local", (req, res, next) => {
  res.render('local-information')
})

router.get("/partido", (req, res, next) => {
  res.render('match-onlive')
})

router.get("/social", (req, res, next) => {
  res.render('feed')
})




module.exports = router;
