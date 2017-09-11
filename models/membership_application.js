const _ = require('lodash')


class MembershipApplication {
  constructor(args) {
    _.extend(this, args)
  }

  nameIsValid() {
    const { first, last } = this
    return first && last
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
  }
}

module.exports = MembershipApplication
