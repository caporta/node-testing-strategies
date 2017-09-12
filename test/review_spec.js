const assert = require('assert')

const ReviewProcess = require('../processes/review')
const MembershipApplication = require('../models/membership_application')


describe('The Review Process', () => {
  describe('receiving a valid application', () => {
    let decision
    before(done => {
      validApp = new MembershipApplication({
        first: 'Test',
        last: 'User',
        email: 'test@test.com',
        age: 30,
        height: 66,
        weight: 180,
      })

      const review = new ReviewProcess()
      review.processApplication(validApp, (err, result) => {
        decision = result
        done()
      })
    })

    it('returns successfully', () => {
      assert(decision.success, decision.message)
    })
  })
})
