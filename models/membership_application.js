const _ = require('lodash')
const moment = require('moment')


class MembershipApplication {
  constructor(args) {
    args || (args = {})
    _.extend(this, args)

    this.validUntil = args.validUntil
      ? moment(args.validUntil)
      : moment().add(10, 'days')
  }

  expired() {
    return this.validUntil.isBefore(moment())
  }

  nameIsValid() {
    return this.first && this.last
  }

  emailIsValid() {
    const { email } = this
    return email && email.length > 3 && email.indexOf('@') > -1
  }

  heightIsValid() {
    const { height } = this
    return height && height > 60 && height < 75
  }

  weightIsValid() {
    const { weight } = this
    return weight && weight > 100 && weight < 300
  }

  ageIsValid() {
    const { age } = this
    return age && age < 100 && age > 15
  }

  isValid() {
    return this.emailIsValid()
      && this.heightIsValid()
      && this.ageIsValid()
      && this.weightIsValid()
      && !this.expired()
  }
}

module.exports = MembershipApplication
