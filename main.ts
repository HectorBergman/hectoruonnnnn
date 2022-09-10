let compassheading = 0
let Initialheading = input.compassHeading()
let Conestart = (Initialheading + 135) % 360
let Coneend = (Initialheading + 225) % 360
let otherway = 0
let Coneend2 = (Coneend + 180) % 360
let Conestart2 = (Conestart + 180) % 360
basic.forever(function () {
    compassheading = input.compassHeading()
})
basic.forever(function () {
    if (otherway == 0) {
        if (Conestart < Coneend) {
            if (compassheading > Conestart && compassheading < Coneend) {
                otherway = 1
            } else {
                basic.showString("U")
            }
        } else {
            if (compassheading > Conestart || compassheading < Coneend) {
                otherway = 1
            } else {
            	
            }
        }
    } else {
        if (Conestart2 < Coneend2) {
            if (compassheading > Conestart2 && compassheading < Coneend2) {
                otherway = 0
            } else {
                basic.showString("D")
            }
        } else {
            if (compassheading > Conestart2 || compassheading < Coneend2) {
                otherway = 0
            } else {
                basic.showString("D")
            }
        }
    }
})
