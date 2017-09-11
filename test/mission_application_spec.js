const assert = require('assert')

const MembershipApplication = require('../models/membership_application')


describe('Applying for mission', () => {
  let validApp

  before(() => {
    validApp = new MembershipApplication({
      first: 'Test',
      last: 'User',
      email: 'test@test.com',
      age: 30,
      height: 66,
      weight: 180,
    })
  })

  describe('Application valid if...', () => {
    it('has an email is greater than four characters and contains a @', () => {
      assert(validApp.emailIsValid(), 'email is invalid')
    })

    it('has a height is between 60 and 75', () => {
      assert(validApp.heightIsValid(), 'height is invalid')
    })

    it('has a age is between 15 and 100', () => {
      assert(validApp.weightIsValid(), 'weight is invalid')
    })

    it('has a weight is between 100 and 300', () => {
      assert(validApp.weightIsValid(), 'age is invalid')
    })

    it('has a first and last name', () => {
      assert(validApp.nameIsValid(), 'name is invalid')
    })

    it('has successful validators', () => {
      assert(validApp.isValid(), 'application is invalid')
    });
  })
})
