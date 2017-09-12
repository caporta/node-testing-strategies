const assert = require('assert')

const sinon = require('sinon')

const ReviewProcess = require('../processes/review')
const MembershipApplication = require('../models/membership_application')


describe('The Review Process', () => {
  describe('receiving a valid application', () => {
    let decision
    const  validApp = new MembershipApplication({
      first: 'Test',
      last: 'User',
      email: 'test@test.com',
      age: 30,
      height: 66,
      weight: 180,
    })

    const review = new ReviewProcess()
    const validationSpy = sinon.spy()
    const missionSpy = sinon.spy()
    const roleAvailableSpy = sinon.spy()
    const roleCompatibleSpy = sinon.spy()

    before(done => {
      review.on('validated', validationSpy)
      review.on('mission-selected', missionSpy)
      review.on('role-available', roleAvailableSpy)
      review.on('role-compatible', roleCompatibleSpy)
      review.processApplication(validApp, (err, result) => {
        decision = result
        done()
      })
    })

    it('returns successfully', () => {
      assert(decision.success, decision.message)
    })

    it('ensures the application is valid', () => {
      assert(validationSpy.called)
    })

    it('ensures the mission is selected', () => {
      assert(missionSpy.called)
    })

    it('ensures the role is available', () => {
      assert(roleAvailableSpy.called)
    })

    it('ensures the role is compatible', () => {
      assert(roleCompatibleSpy.called)
    })
  })
})
