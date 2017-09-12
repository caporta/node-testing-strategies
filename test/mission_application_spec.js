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
    it('has successful validators', () => {
      assert(validApp.isValid(), 'application is invalid')
    });
  })

  describe('Application invalid if...', () => {
    it('is expired', () => {
      const app = new MembershipApplication({ validUntil: Date.parse('01/01/2010') })
      assert(app.expired())
    })

    it('has an email four characters or less', () => {
      const app = new MembershipApplication({ email: 'dd' })
      assert(!app.emailIsValid())
    })

    it('has an email without a @', () => {
      const app = new MembershipApplication({ email: 'dd' })
      assert(!app.emailIsValid())
    })

    it('has an omitted email', () => {
      const app = new MembershipApplication()
      assert(!app.emailIsValid())
    })

    it('has a height less than 60 inches', () => {
      const app = new MembershipApplication({ height: 50 })
      assert(!app.heightIsValid())
    })

    it('has a height more than 75 inches', () => {
      const app = new MembershipApplication({ height: 80 })
      assert(!app.heightIsValid())
    })

    it('has an omitted height', () => {
      const app = new MembershipApplication()
      assert(!app.heightIsValid())
    })
  })
})
