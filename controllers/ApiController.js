const Person = require('mongoose').model('Person');
// const mongoose = require('mongoose');
// const Person = mongoose.model(Person, PersonSchema);

class ApiController {
  all (req, res) {
    Person.find({}, (err, people) => {
      if (people) {
        return res.status(200).json(people);
      } else {
        return res.status(404).json('Our database blew up! ' + err);
      }
    })
  }


  create (req, res) {
    let person = new Person({ name: req.params.name })
    person.save(errs => {
      if (errs) {
        console.log(errs)
        for (let err in errs.errors) {
          console.log('errors', err.errors[err].message)
        }
        return res.status(404).json('You done messed this one up.')
      } else {
        res.redirect('/')
      }
    })
  }

  remove (req, res) {}

  findOne (req, res) {
    Person.find( { name: req.params.name }, (err, person) => {
      if (err) {
        console.log('Something went teribbly awefully wrong here.', err)
        res.json({ message: 'Error', error: err })
      } else {
        console.log("Found: ", person);
        res.json({ person })
      }
    })
  }
}

module.exports = new ApiController();
