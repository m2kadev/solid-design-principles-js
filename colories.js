class coloriesTracker {
    constructor(maxColories) {
        this.maxColories = maxColories
        this.currentColories = 0
    }

    trackColories(coloriesCount) {
        this.currentColories += coloriesCount
        if (this.currentColories >= this.maxColories) {
            this.logColoriesSurplus()
        }
    }

    logColoriesSurplus() {
        console.log("Max colories exceeded")
    }
}

const colorieTracker = new coloriesTracker(2000)
colorieTracker.trackColories(2500)

