const router = require("express").Router();
let Profile = require("../models/profile.model");
let User = require("../models/user.model");

router.route("/:id/profiles").get((req, res) => {
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/profiles/add").post(async (req, res) => {
  const { id } = req.params;
  const description = req.body.description;
  const user = await User.findById(id);

  const newProfile = new Profile({
    description,
  });

  user.profiles.push(newProfile);
  newProfile
    .save()
    .then(() => res.json("Profile added!"))
    .catch((err) => res.status(400).json("Error: " + err));
  user.save();
});

router.route("/:id/profiles/:id").get((req, res) => {
  Profile.findById(req.params.id)
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/profiles/:id").delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json("Profile deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/profiles/update/:id").post((req, res) => {
  Profile.findById(req.params.id)
    .then((profiles) => {
      profiles.description = req.body.description;
      profiles
        .save()
        .then(() => res.json("Profile updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
